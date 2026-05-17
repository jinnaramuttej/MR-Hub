import { Buffer } from 'buffer';
import fs from 'fs';
import path from 'path';

const MIME = {
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.avif': 'image/avif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4',
  '.json': 'application/json',
  '.woff2': 'font/woff2',
};

function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (c) => chunks.push(Buffer.from(c)));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

export default async function handler(req, res) {
  try {
    // Serve static assets from dist/client first
    try {
      const host = req.headers.host || 'localhost';
      const url = new URL(req.url || '/', `http://${host}`);
      const pathname = decodeURIComponent(url.pathname);

      // Only serve files that live under /assets or known static filenames
      if (pathname.startsWith('/assets/') || pathname === '/favicon.png' || pathname.endsWith('.css') || pathname.endsWith('.js') || pathname.endsWith('.png') || pathname.endsWith('.jpg') || pathname.endsWith('.jpeg') || pathname.endsWith('.mp4')) {
        const filePath = path.join(process.cwd(), 'dist', 'client', pathname);
        if (fs.existsSync(filePath)) {
          const ext = path.extname(filePath).toLowerCase();
          const mime = MIME[ext] || 'application/octet-stream';
          const data = await fs.promises.readFile(filePath);
          res.statusCode = 200;
          res.setHeader('content-type', mime);
          return res.end(Buffer.from(data));
        }
      }
    } catch (e) {
      // ignore and fallthrough to SSR handler
      console.error('static asset serve error:', e);
    }
    const { default: server } = await import('../dist/server/server.js');

    const host = req.headers.host || 'localhost';
    const url = new URL(req.url || '/', `http://${host}`);

    const headersInit = [];
    for (const [k, v] of Object.entries(req.headers || {})) {
      if (Array.isArray(v)) v.forEach((val) => headersInit.push([k, String(val)]));
      else if (v != null) headersInit.push([k, String(v)]);
    }

    let body = undefined;
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      const buf = await readRequestBody(req);
      if (buf && buf.length) body = buf;
    }

    const request = new Request(url.toString(), {
      method: req.method,
      headers: headersInit,
      body,
    });

    const response = await server.fetch(request, {}, {});

    res.statusCode = response.status;
    // set headers (handle multiple values correctly)
    for (const [key, value] of response.headers) {
      // Node's setHeader supports arrays for multiple values
      const existing = res.getHeader(key);
      if (existing) {
        if (Array.isArray(existing)) res.setHeader(key, [...existing, value]);
        else res.setHeader(key, [String(existing), value]);
      } else {
        res.setHeader(key, value);
      }
    }

    const arrayBuffer = await response.arrayBuffer();
    res.end(Buffer.from(arrayBuffer));
  } catch (err) {
    console.error('api/ssr handler error:', err);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
}
