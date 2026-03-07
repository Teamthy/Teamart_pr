// Lightweight proxy helper (optional). Keep for local dev if you need to proxy requests.
import http from 'http';
import httpProxy from 'http-proxy';

const proxy = httpProxy.createProxyServer({});
const server = http.createServer((req, res) => {
    // Example: proxy /api/vision to local Vision AI server
    if (req.url?.startsWith('/api/vision')) {
        proxy.web(req, res, { target: 'http://localhost:5000' });
    } else {
        res.statusCode = 404;
        res.end('Not proxied');
    }
});

server.listen(5050);
console.log('Proxy listening on :5050');
