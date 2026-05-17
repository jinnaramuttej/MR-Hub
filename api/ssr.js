import { Buffer } from 'buffer';

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
