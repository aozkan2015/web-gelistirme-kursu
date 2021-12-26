const http = require('http');
const fs=require('fs');

const requestListener = function (req,res) {

  res.writeHead(200);
  res.end("Hello World!");
}

const server = http.createServer(requestListener);
server.listen(8080);
