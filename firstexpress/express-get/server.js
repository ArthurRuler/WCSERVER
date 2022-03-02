/*
    AppName: Express-get
    Author: Andrew Philip Mendiola
    Description: express-get code
*/

var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/index.html', function(req, res){
    res.sendFile(__dirname + "/" + "index.html");
});

app.get('/process_get', function(req, res) {
    response = {
        first_name:req.query.first_name,
        last_name:req.query.last_name,
        stud_course:req.query.stud_course,
        stud_age:req.query.stud_age,
        stud_comment:req.query.stud_comment
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

var server = app.listen(5000, 'localhost', function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});