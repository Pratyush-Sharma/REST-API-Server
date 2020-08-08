var http = require('http');

const server = http.createServer(function (req, res) {

res.writeHead(200, {'Content-Type':'text/html'})   
//or
// response.setHeader('content-type','text/html');
// response.setHeader(200); 
res.write(req.url);
res.write('<b>Hi Guest</b><br/>');
res.write('<span style="font-weight:bold; color:Green">Welcome to Tutlane</span>');

res.end();

});

// It will handle the errors in server

server.on('error', (err) => {

    throw err;

});

server.listen(4200, () => {

    console.log('Server listening on port : 4000');

});

// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.write('<h1>Hello, Node.js!</h1>');
//     }
//     res.end();
// });

// server.listen(5000);
// console.log(`The HTTP Server is running on port 5000`);
