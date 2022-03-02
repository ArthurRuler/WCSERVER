/*
    AppName: Express-Post
    Author: Andrew Philip Mendiola
    Description: express post code
*/

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false})

app.use(express.static('public'));
app.get('/index.html', function(req, res){
    res.sendFile(__dirname + "/" + "index.html");
});

app.post('/process_post', urlencodedParser, function(req, res) {
    response = {
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        stud_course:req.body.stud_course,
        stud_age:req.body.stud_age,
        stud_comment:req.body.stud_comment
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

var server = app.listen(5000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});