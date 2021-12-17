const http = require('http');
const port = 9099;

const server = http.createServer((req, resp) => {
    console.log(`host: ${req.headers['host']}`);    
    console.log(`remote adress: ${req.connection.remoteAddress}`);
    console.log(`x-real-ip: ${req.headers['x-real-ip']}`);
        
    resp.writeHead(200, {'Content-Type': 'text/html'});
    resp.end('<h1>Blog Server Proxied!</h1>');
});
server.listen(port, 'localhost', () => console.log(`Proxied Blog Server Running on Port ${port}`));