// const express = require('express');
// const router = express.Router();

const passport = require('passport');
module.exports = app => {
  // Google authentication route
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  //Google authentication callback route
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => res.redirect('/')
  );
};
