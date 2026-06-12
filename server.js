const http = require('http');
const fs = require('fs');

const PORT = 8080;

http.createServer((req, res) => {
    const file = req.url === '/' ? './index.html' : '.' + req.url;
    fs.readFile(file, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end('Not Found');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(data);
    });
}).listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Real Vending Machine running at http://localhost:${PORT}`);
});