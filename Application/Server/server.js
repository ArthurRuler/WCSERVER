var http = require('http');
var user = require('../User/app.js');

var server = http.createServer(function(req, res) {
    if (req.url == '/') {
        res.writeHead(200, {'Content-type' : 'text/html'});
        res.write('<html><body><h1>Welcome to my Node.js Application</h1></body></html>');
        res.write('Welcome ' + user() +'.' + ' This is an activity about basics of Node.js');
        res.end();
    }

    else if (req.url == '/about') {
        res.writeHead(200, {'Content-type' : 'text/html'});
        res.write('<html><body><h1>This is the About Page</h1></body></html>');
        res.write('Hello ' + user() + '.' + 'This activity will teach on how to deal with a simple server and local modules in Node.js');
        res.end();
    }

    else if (req.url == '/contact') {
        res.writeHead(200, {'Content-type' : 'text/html'});
        res.write('<html><body><h1>This is the Contact Page</h1></body></html>');
        res.write(user() + ', if you want additional details about this activity go to this site: http://www.tutorialsteacher.com/nodejs/nodejs-tutorials');
        res.end();
    }

    else if (req.url == '/gallery') {
        res.writeHead(200, {'Content-type' : 'text/html'});
        res.write('<html><body><h1>This is the Gallery Page</h1></body></html>');
        res.end();
    }

    else if (req.url == '/new') {
        res.writeHead(200, {'Content-type' : 'text/html'});
        res.write('Invalid Request');
        res.end();
    }
});

server.listen(4000);