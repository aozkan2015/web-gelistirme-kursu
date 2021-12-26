const http = require('http');
const fs=require('fs');
const { Console } = require('console');


const requestListener = function (req,res) {
Console.log(req);
  res.writeHead(200);
  res.end(index.toString());
}

const server = http.createServer(requestListener);
server.listen(8080);
