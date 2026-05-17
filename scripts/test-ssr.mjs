import serverModule from '../dist/server/server.js';

async function run() {
  try {
    const server = serverModule.default ?? serverModule;
    const req = new Request('http://localhost/');
    const res = await server.fetch(req, {}, {});
    console.log('status:', res.status);
    const text = await res.text();
    console.log('body snippet:', text.slice(0, 400));
  } catch (err) {
    console.error('test-ssr error:', err);
  }
}

run();
