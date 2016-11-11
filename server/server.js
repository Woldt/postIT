var express = require('express');
var config = require("./_config/main.js");
var path = require('path');


var app = express();
app.set('port',config.port);

//routes --> extract routes into different express.router() middleware thingies:
app.get('/', function(req,res){
  res.send("Hello World");
});


app.listen(app.get('port'), function() {
  console.log("server is running on port " + app.get('port'));
});
