"use strict";

const PostIT = require("../_models/postit"); //import the exported Model

/*
Now whenever we want to do something with the PostIT-schema in the database
we have to use / refrence the exported name in postit. such as

PostIT.findOne(...);
*/

/*
exports.searchByTitel = function(req, res, next){
  const reqTitel = JSON.parse(req.body.titel);

  // Search in database --> PostIT Model for a instance matching reqTitel
  PostIT.findOne(reqTitel, function(err, existingPostIT){
    if (err){
      return next(err);
    }
    if (existingPostIT) {
      return res.status(200).send(existingPostIT);
    }
    else {
      return res.status(422).send({ error: 'No such PostIT saved'});
    }
  });
};

*/

// This function gets called when a request is sendt as POST to /api/postit
exports.searchByTitel = function(req, res, next) {
  var reqParam = req.params; // Access post-body key-value pairs
  console.log(reqParam);
  console.log("tjohei");
  res.status(200).send(reqParam);

}
