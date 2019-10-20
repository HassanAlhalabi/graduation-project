const mongoose = require('mongoose');
const { Schema } = mongoose;

//Define the User collection objects structure with datatypes
const user = new Schema({
  isAdmin: {
    type: Boolean,
    default: false
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  googleId: {
    type: String
  },
  facebookId: {
    type: String
  },
  avatar: String
});

//Export the model on the mongoose.
//So this model will be inserted to the database.
module.exports = mongoose.model('User', user);
