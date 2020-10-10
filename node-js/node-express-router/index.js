const express = require("express");
const http = require("http");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const port = 3000;
const hostname = "localhost";

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());

app.all('/dishes', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next ();
});

app.get('/dishes', (req, res, next) => {
    res.end('Will send all the ishes to you!');
});

app.post('/dishes', (req, res, next) => {
    res.end('Will add the dish: ' + req.body.name +
    ' with details: ' + req.body.description);
});

app.put('/dishes', (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operationnot supported on /dishes');
});

app.delete('/dishes', (req, res, next) => {
    res.end('Deleting all the dishes!');
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server started at: http://${hostname}:${port}/`)
})