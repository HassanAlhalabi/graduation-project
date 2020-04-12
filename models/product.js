const mongoose = require('mongoose');
const { Schema } = mongoose;

const product = new Schema({
  userId: String,
  name: String,
  description: String,
  specifications: [String],
  price: Number,
  prevPrice: Number,
  itemsNumber: Number,
  picture: String,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', product);
