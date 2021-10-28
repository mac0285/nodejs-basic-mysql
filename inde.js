//console.log("hello word!");


var http = require('http');

var server = http.createServer(function (req, res) {
    res.end("Hi, selamat datang di nodejs");
});

server.listen(80);

console.log("server running on http://localhost:80");


