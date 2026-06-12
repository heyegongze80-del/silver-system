const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 5000;
const HOST = '0.0.0.0'; // 👈 コンテナの外からアクセスさせるための重要設定！

const server = http.createServer((req, res) => {
    // どのURLにアクセスされても index.html を返すシンプルな仕組み
    fs.readFile(path.join(__dirname, 'aa.html'), (err, data) => {
        if (err) {
            res.writeHead(500);
            return res.end('Error loading aa.html');
        }
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(data);
    });
});

server.listen(PORT, HOST, () => {
    console.log(`🚀 サーバーが起動しました！ブラウザで http://localhost:${PORT} を開いてください`);
});