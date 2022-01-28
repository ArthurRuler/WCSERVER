var http = require('http');

var server = http.createServer(function(req, res) {
    if (req.url == '/') {
        res.writeHead(200, {'Content-type': 'text/html'});
    
        res.write('<html><body><p>Thisis home Page.</p></body></html>');
        res.end();
    }
    else if (req.url == "./student") {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write('<html><body><p>This is student Page.</p></body>')
    }
});

server.listen(5000);

console.log('NodeJS web server at port 5000 is running...');