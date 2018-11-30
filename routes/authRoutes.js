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
  app.get('/auth/google/callback', passport.authenticate('google'));

  //user logout route - destroy the cookie in the browser -
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  //display current user info
  app.get('/api/current_user', (req, res) => {
    //the info that passport trying to set in the cookie and pass it into deserializeUser
    //res.send(req.session);

    //the deserialized user
    res.send(req.user);
  });
};
