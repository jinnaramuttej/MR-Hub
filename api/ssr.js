import { Buffer } from 'buffer';

export default async function handler(req, res) {
  try {
    const { default: server } = await import('../dist/server/server.js');

    const host = req.headers.host || 'localhost';
    const url = new URL(req.url || '/', `http://${host}`);

    const headers = new Headers();
    for (const [k, v] of Object.entries(req.headers || {})) {
      if (Array.isArray(v)) v.forEach((val) => headers.append(k, val));
      else if (v != null) headers.set(k, String(v));
    }

    const body = req.method === 'GET' || req.method === 'HEAD' ? undefined : req;

    const request = new Request(url.toString(), {
      method: req.method,
      headers,
      body,
    });

    const response = await server.fetch(request, {}, {});

    res.statusCode = response.status;
    response.headers.forEach((value, key) => res.setHeader(key, value));

    const arrayBuffer = await response.arrayBuffer();
    res.end(Buffer.from(arrayBuffer));
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
}
