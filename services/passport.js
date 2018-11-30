const keys = require('../config/keys');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

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
let primaryEmail;
const getGoogleEmail = res => {
  for (var i = 0; i < res.emails.length; i++) {
    if (res.emails[i].type === 'account') {
      primaryEmail = res.emails[i].value;
    } else {
      primaryEmail = '';
    }
  }
};

//Setting up users authentication with google oauth20 strategy with passport
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
              email: primaryEmail,
              avatar: gravatar.url(primaryEmail, {
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
