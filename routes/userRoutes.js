const express = require('express');
const router = express.Router();

//user logout route - destroy the cookie in the browser -
router.get('/logout', (req, res) => {
  console.log('User Logout route called...');
  req.logout();
  res.send(req.user);
});

//display current user info
router.get('/current_user', (req, res) => {
  //the info that passport trying to set in the cookie and pass it into deserializeUser
  //res.send(req.session);

  //the deserialized user
  res.send(req.user);
});

router.post('/payment', (req, res) => {
  //handle updating user info after payment
  console.log('payment route been called ..');
  res.send(req.user);
});

module.exports = router;
