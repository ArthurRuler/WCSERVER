/*
    AppName: File Upload
    Author: Andrew Philip Mendiola
    Description:
*/

var express = require("express");
var app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("Successfully created the Second App");
});

var server = app.listen(8081, 'localhost', function(){
    var host = server.address().address
    var port = server.address().port

    console.log("Example app at http://%s:%s", host, port);
});

