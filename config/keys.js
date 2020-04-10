const ENV = require('dotenv');
ENV.config();

module.exports = {
  mongoURI: process.env.MONGO_URI,
  sessionSecretKey: process.env.SESSION_SECRET_KEY,
  cloudinaryName: process.env.CLOUDINARY_NAME,
  cloudinaryAPIKey: process.env.CLOUDINARY_API_KEY,
  cloudinaryAPISecret: process.env.CLOUDINARY_API_SECRET,
  cloudinaryUrl: process.env.REACT_APP_CLOUDINARY_URL,
  cloudinaryUploadPreset: process.env.CLOUDINARY_UPLOAD_PRESET,
  auth0ClientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
  auth0Domain: process.env.REACT_APP_AUTH0_DOMAIN,
  auth0ClientSecret: process.env.REACT_APP_AUTH0_CLIENT_SECRET,
  githubClientId: process.env.GITHUB_CLIENT_ID,
  githubClientSecret: process.env.GITHUB_CLIENT_SECRET,
  facebookAppId: process.env.FACEBOOK_APP_ID,
  facebookSecretId: process.env.FACEBOOK_APP_SECRET,
  googleOauth2ClientID: process.env.GOOGLE_OAUTH2_CLIENT_ID,
  googleOauth2ClientSecret: process.env.GOOGLE_OAUTH2_CLIENT_SECRET,
  cookieKey: process.env.COOKIE_KEY,
  stripePublishKey: process.env.STRIPE_PUB_KEY,
  stripeSecretKey: process.env.STRIPE_SEC_KEY,
};
