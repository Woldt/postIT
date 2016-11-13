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

};

exports.newPostit = function(req, res, next) {
  var newPostit = req.body; // extract from the request body the key-value pairs

  console.log(newPostit); // RB4P

  // Check that all needed information is present and valid:
  if(newPostit.title == '' || newPostit.category == '' || newPostit.description == ''){
    return res.status(422).send({ error: 'Did you spessify title, category and description?' });
  }

  // If validation is passed, create a new postit:
  var postit = new PostIT({
    titel: newPostit.title,
    category: newPostit.category.split(","), //create a list of the category keywords, split category on ','
    description: newPostit.description
  })

  // Try and save to database
  postit.save(function(err, newPostit){
    if(err) {
      return res.status(400).send({ message: 'something went wrong. Could not add new postit: ' + error})
    }
    // If no error, and saving a new postit was success. send this response
    return res.status(200).send(newPostit + "\nSuccessfully saved");
  });
};
