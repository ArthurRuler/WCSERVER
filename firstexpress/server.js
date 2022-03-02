const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send("Successfully created the Second App");
});

var server = app.listen(2001, 'localhost', function(){
    var host = server.address().address
    var port = server.address().port

    console.log("Example app at http://%s:%s", host, port);
});

