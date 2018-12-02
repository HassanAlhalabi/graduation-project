const keys = require('../config/keys');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

const User = require('../models/user');

const gravatar = require('gravatar');

// serialize user to generate a cookie (token) and store it in the browser after authntication with google
passport.serializeUser((user, done) => {
  done(null, user.id);
  //null represents the error object which in this not-complicated process we will have no errors
  // in our case we take user.id as a token to be set as a user cookie in the browser
});

//deserialize user and pull out the token inside the cookie - user id - and search in DB for this user
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => done(null, user))
    .catch(err => console.log(err));
});

//Getting the email from profile object
let googleEmail;
const getGoogleEmail = res => {
  for (var i = 0; i < res.emails.length; i++) {
    if (res.emails[i].type === 'account') {
      googleEmail = res.emails[i].value;
    } else {
      googleEmail = '';
    }
  }
};

let facebookEmail;
const getFacebookEmail = res => {
  for (var i = 0; i < res.emails.length; i++) {
    if (res.emails[i].value) {
      facebookEmail = res.emails[i].value;
    } else {
      facebookEmail = '';
    }
  }
};

let facebookAvatar;
const getFacebookAvatar = res => {
  for (var i = 0; i < res.photos.length; i++) {
    if (res.photos[i].value) {
      facebookAvatar = res.photos[i].value;
    } else {
      facebookAvatar = '';
    }
  }
};

//Setting up users authentication with Google oauth20 strategy with passport
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleOauth2ClientID,
      clientSecret: keys.googleOauth2ClientSecret,
      callbackURL: '/auth/google/callback/',
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id })
        .then(user => {
          if (user) {
            // User already exists, no need to create a new user just log the user in
            console.log(
              `User with Google ID: ${user.googleId} is already exists`
            );
            done(null, user); // null for error object, which is null because the user is fetched from the DB
          } else {
            // User does not exists, create a new user and log in
            getGoogleEmail(profile);
            new User({
              googleId: profile.id,
              name: profile.displayName,
              email: googleEmail,
              avatar: gravatar.url(googleEmail, {
                s: '200', // Size
                r: 'pg', // Rating
                d: 'mm' // Default
              })
            })
              .save()
              .then(user => done(null, user))
              .catch(err => console.log(err));
          }
        })
        .catch(err => console.log(err));
    }
  )
);

//Setting up users authentication with Facebook strategy with passport

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebookAppId,
      clientSecret: keys.facebookSecretId,
      callbackURL: '/auth/facebook/callback',
      profileFields: ['id', 'displayName', 'photos', 'emails'],
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ facebookId: profile.id })
        .then(user => {
          if (user) {
            // User already exists, no need to create a new user just log the user in
            console.log(
              `User with Facebook ID: ${user.facebookId} is already exists`
            );
            done(null, user); // null for error object, which is null because the user is fetched from the DB
          } else {
            // User does not exists, create a new user and log in
            getFacebookEmail(profile);
            getFacebookAvatar(profile);
            new User({
              facebookId: profile.id,
              name: profile.displayName,
              email: facebookEmail,
              avatar: facebookAvatar
            })
              .save()
              .then(user => done(null, user))
              .catch(err => console.log(err));
          }
        })
        .catch(err => console.log(err));
    }
  )
);
