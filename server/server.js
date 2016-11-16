var express = require('express'); // Import express server framework
var config = require("./_config/main.js"); // Import configurations
var path = require('path'); // Import path-module
var router = require('./router.js'); // Import main router with all routes
var mongoose = require('mongoose'); // Import the database handler
var bodyParser = require('body-parser'); // parse urlencoded bodies to JSON and expose the object in req.body

var logger = require('morgan') // server request logger


// Create a express server
var app = express();


/*
Define all  server and route configuraiton BEFORE defining routes!
*/

// makes the server print to terminal all requests.
app.use(logger('dev'));

//make the server use port spesified in _config/main.js
app.set('port',config.port);

// Make the server able to listen extract content from POST body, and parse JSON
app.use(bodyParser.urlencoded({ extended: false })); // extended choose between parsing the URL-encoded data with the "querystring" library(false) or the "qs" library(true)
app.use(bodyParser.json()); // returns middleware that only parsers json

// Enable CORS from client-side
app.use(function(req, res, next) {
  var allowedOrigins = ['http://localhost:5000', 'http://localhost:3000','http://www.postit.idi.ntnu.no:5000','http://www.it2810-02.idi.ntnu.no:5000'];  // Allow client server/domain to send requests
  var origin = req.headers.origin;  // Extract origin (domain/adress) from request
  if(allowedOrigins.indexOf(origin) > -1){  // Check if origin of request is in the list of allowed origins
       res.setHeader('Access-Control-Allow-Origin', origin);  // set the header of the respons msg to send back!
  }

  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE'); // Tell the client what methods are allowed to use
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); // Tell the client what header tags are allowed
  next(); // Call the next function in the callback-stack
});


// Set the server to listen to all the different routes declared in router.js
app.use('/', router);


// configure the database MongoDB
// try and connect to the MongodDB spesified in the config file
mongoose.connect(config.database, function(err, db){
  if(err){ // if a error occured when trying to connect
    console.log("Something went wrong when trying to connect to the mongoDB server. Error: " + err);
  }
  else {
    // Connected!!!
    console.log('Successfully connected to: ' + config.database);
  }
});

// Start the server, and listen to the spesified port.
app.listen(app.get('port'), function() {
  console.log("server is running on port " + app.get('port'));
});
