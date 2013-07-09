var express = require('express');
var app = express.createServer(express.logger());

var fs = require('fs');
var buff = new Buffer(fs.readFileSync("index.html"));
//console.log(buff.toString());

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  response.send(buff.toString())
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
