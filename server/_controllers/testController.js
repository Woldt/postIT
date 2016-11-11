"use strict"; // Doen't compile on syntax errors, strict syntax!

// send a get to http://localhost:8080/api/test --> worked
exports.firstGet = function(req,res,next){
  res.status(200).send({txt: "hello from testController, through api"})
};
