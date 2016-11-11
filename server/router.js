var express = require('express');
var router = express.Router();

// Import all the controllers, to controll what happens on a surtain request
var testController = require('./_controllers/testController.js');

// Define the different route groupes:
const apiRoutes = express.Router();


/*
| ----------------------------------------------------
|  API / postIT routes
| ----------------------------------------------------
*/
// www.localhost:8080/api/test
apiRoutes.get('/test', testController.firstGet);







// Add all the different route goups to the main router
router.use("/api", apiRoutes);

// Export the main router to the server
module.exports = router;
