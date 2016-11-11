var express = require('express'); // Import express server framework
var config = require("./_config/main.js"); // Import configurations
var path = require('path'); // Import path-module
var router = require('./router.js'); // Import main router with all routes

// Create a express server
var app = express();

//make the server use port spesified in _config/main.js
app.set('port',config.port);

// Set the server to listen to all the different routes declared in router.js
app.use('/', router);

// Start the server, and listen to the spesified port.
app.listen(app.get('port'), function() {
  console.log("server is running on port " + app.get('port'));
});
