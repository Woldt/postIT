"use strict"; // use strict Javascript syntax. Doen't allow sloppy coding, etc

const PostIT = require("../_models/postit"); //import the exported Model

/*
Now whenever we want to do something with the PostIT-schema in the database
we have to send a request to the spesified path in rouer.js
example, to get all postit from database we have to query
http://localhost:8080/api/postit/all
*/


// This function gets called when a request is sendt as GET to /api/postit/search
// with a parameter title

/**
This function is used to find a document by its title, and then returns the
given document in JSON format.

GET-method
:title: is in the request URL as parameter
*/
exports.searchByTitle = function(req, res, next) {
  let title = req.params.title; // extract :title from URL

  // Try and find all in the database that matches the parameter title
  PostIT.find({title: new RegExp(title,'i')}, function(err, doc){
    if(err){
      return res.status(422).send({error: "Something went wrong, Error: " + err});
    }
    // If nothing went wrong, check if found.
    console.log("doc : " + doc);  // RB4P
    if(doc == null){ // No documents matching found
      return res.status(200). send({message: "Could not find a postit with that title. Did you spell it right?"});
    }

    // If a postit matched and can be returned
    return res.status(200).send(doc);

  });
};

/**
This function creates a new document and saves it to the collection.
Has minor validation

Returns the new document as JSON allong with a "Successfully saved"

POST-method
:title: is sent in the request body
:category: is sent in the request body
:description: is sent in the request body
*/
exports.newPostit = function(req, res, next) {
  var newPostit = req.body; // extract from the request body the key-value pairs

  console.log(newPostit); // RB4P

  // Check that all needed information is present and valid:
  if(newPostit.title == '' || newPostit.category == '' || newPostit.description == ''){
    return res.status(422).send({ error: 'Did you spessify title, category and description?' });
  }

  // If validation is passed, create a new postit:
  var postit = new PostIT({
    title: newPostit.title,
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

/**
This functions queries the database and returns all the documents in the collection
as JSON format

GET-method
:params: No parameters
*/
exports.getAll = function(req, res, next) {
  /* To call this method, and get all postits from database, no query is needed.
  Therefor there is no need to send information as parameter or in body. */

  // Try and get all documents from database collection:
  let query = "";
  PostIT.find(query, function(err, documents) {
    if(err) {
      return res.status(422).send({ error: "Something went wrong trying to get all documents:" + err})
    }
    // If finding all went smuud, send them back to the client
    // returns a list of JSON objects!!!
    return res.status(200).send(documents);

  });
};
/**
This function removes a document from the collection based on the id given
as a parameter, and returns message "Successfully deleted" along with the
status code "200"

DELETE-method
:id: in the request URL
*/
exports.deleteById = function(req, res, next ){
  // DELETE method, but query is sendt in URL so therefor we have to use req.params
  let id = req.params.id; // Extract the id from the request
  console.log("ID: " + id);  // RB4P

  //validation
  if(typeof(id) == 'undefined'){
    return res.status(422).send({
      error : "Did you remember to send the 12 byte _id ?"
    });
  }

  PostIT.remove({ _id: id }, function(err, doc){
    // If something went wrong:
    if(err){
      return res.status(422).send({
        error: "Something went wrong: Error: " + err
      })
    }
    // If removal was success
    console.log("Doc: " + doc) // RB4P
    return res.status(200).send({message: "Successfully deleted"});
  })
};

/**
This is a function to handle the updating of a document in the collection.
First the function finds the given document by its ID, then updates the
document and then saves it back to the collection updated.

PUT-method:
:id: is found in the url
:title: is in the request body
:category: is in the request body
:description: is in the request body
*/
exports.updateById = function(req, res, next){
  let id = req.params.id;

  // Do some validation! -- if neccessary

  // Try to find the document with the given ID:
  PostIT.findOne({ _id : id }, function(err, doc){
    // If something went wrong:
    if(err){
      return res.status(422).send({ error: "Something went wrong, when trying to find the document. Error: " + err });
    }
    // If finding document went "OK" - catbug:
    console.log("DOC: " + doc) // RB4P
    // Extract information from request body
    let title = req.body.title,
        category = req.body.category,
        description = req.body.description;

    // Update document:
    doc.title = title;
    doc.category = category;
    doc.description = description;

    console.log("updated DOC: " + doc); // RB4P
    // save / update the doc
    doc.save();

    // Send response to client
    return res.status(200).send(doc + "\nSuccessfully updateById");
  });
};
