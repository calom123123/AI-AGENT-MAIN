const http = require('http');
const url = require('url');

const PORT = process.env.PORT || 3003;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    res.setHeader('Content-Type', 'application/json');

    if (parsedUrl.pathname === '/api/ai') {
        res.end(JSON.stringify({ status: 'success', message: 'AI Agent is active!' }));
    } else if (parsedUrl.pathname === '/api/status') {
        res.end(JSON.stringify({ status: 'running', uptime: process.uptime() }));
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ status: 'error', message: 'Not Found' }));
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
