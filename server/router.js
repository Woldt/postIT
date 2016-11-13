var express = require('express');
var router = express.Router();

// Import all the controllers, to controll what happens on a surtain request
var testController = require('./_controllers/testController.js');
var postitController = require('./_controllers/postitController');

// Define the different route groupes:
const apiRoutes = express.Router();

/*
req.params
To send parameters IN URL (both GET or POST) the url/ route has to be
constructed like this:
('/users/:userID/books/:bookId') --> what this does, is that it tells the
server to listen for a get request to /users/
:userID  is substituted in the request with a value. --> this gives the url to
request : www.example.com/users/10 --> this constructs the request parameters
to look like this : {userID : 10}.

So if the app uses
app.get('/users/:userID/books/:bookId'); and a user sends a get request, the
request should look like this : /users/10/books/99
and the request params looks like this: { userID : 10, bookId : 99 }

req.body
To send info in BODY of request:
the route has to be constructed like this:
(/users) > what this does is that it doesent expect any parameters in the url,
but in the request body. and the body is constructed in key-value pairs.

to send information in the body of a request the user has to append the
information to the request body as key-value pairs.

*/

/*
| ----------------------------------------------------
|  API / postIT routes
| ----------------------------------------------------
*/
// www.localhost:8080/api/test
apiRoutes.get('/test', testController.firstGet);
apiRoutes.get('/postit/search/:titel', postitController.searchByTitel);
apiRoutes.post('/postit/new', postitController.newPostit);



// Add all the different route goups to the main router
router.use("/api", apiRoutes);

// Export the main router to the server
module.exports = router;
