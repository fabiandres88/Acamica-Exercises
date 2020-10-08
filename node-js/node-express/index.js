const express = require('express');
const http = require('http');
const app = express();

const port = 3000;
const hostname = "localhost";

app.use((req, res, next)=> {
    console.log(req.headers);
    res.statusCode - 200;
    res.setHeader('Content-Type', 'text-html');
    res.end('<html><body><h1>This is an Express server</h1></body></html>');
});

const server =http.createServer(app);

server.listen(port,hostname, ()=>{
    console.log(`Server starting at http://${hostname}:${port}/`);
})