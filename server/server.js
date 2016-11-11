var express = require('express');
var config = require("./_config/main.js");
var path = require('path');
var router = require('./router.js');

var app = express();
app.set('port',config.port);

// routes --> extract routes into different express.router() middleware thingies:
app.use('/', router);

app.listen(app.get('port'), function() {
  console.log("server is running on port " + app.get('port'));
});
