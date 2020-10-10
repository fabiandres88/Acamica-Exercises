const express = require("express");
const http = require("http");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const port = 3000;
const hostname = "localhost";

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server started at: http://${hostname}:${port}/`)
})