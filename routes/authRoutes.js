const express = require('express');
const router = express.Router();

const passport = require('passport');

// Google authentication route
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

//Google authentication callback route
router.get('/google/callback', passport.authenticate('google'), (req, res) =>
  res.redirect('/')
);

// Facebook authentication route
router.get(
  '/facebook',
  passport.authenticate('facebook', { scope: ['email'] })
);

//Facebook authentication callback route
router.get(
  '/facebook/callback',
  passport.authenticate('facebook'),
  (req, res) => res.redirect('/')
);

module.exports = router;
