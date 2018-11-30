const mongoose = require('mongoose');
const { Schema } = mongoose;

//Define your User Collection Objects Structure
//With datatypes
//We'll be using Auth0 for authentication in the future.
//THis is where the user will login
//For Now we will be inserting test data
const user = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  googleId: {
    type: String,
    required: true
  },
  avatar: String
});

//Export the model on the mongoose.
//So this model will be inserted to the database.
module.exports = mongoose.model('User', user);
