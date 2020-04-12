const cloudinary = require('cloudinary');
const keys = require('../config/keys');

module.exports = cloudinary.config({
  cloud_name: keys.cloudinaryName,
  api_key: keys.cloudinaryAPIKey,
  api_secret: keys.cloudinaryAPISecret
});
