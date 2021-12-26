const http = require('http');


const requestListener = function (req,res) {

  res.writeHead(200);
  res.end("<b>Hello World!</b>");
}

const server = http.createServer(requestListener);
server.listen(8080);
