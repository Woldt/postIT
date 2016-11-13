const mongoose = require('mongoose'),
      Schema = mongoose.Schema;


const PostitSchema = new Schema({
  // Dont have to write "id" because MongoDB inserts this by itself as "_id"
  title: String,
  category: Array,
  description: String
});

// export the Schema so that it can be used by other modules / codes
// .model : compiles the Schema to a Model / tabel in the database
module.exports = mongoose.model('PostIT', PostitSchema);
