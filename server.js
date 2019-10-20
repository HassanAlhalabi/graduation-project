//Enables the .env file, therefore add a env property to process object.
//Recommend to require it at the top of the file
require('dotenv').config();

//Require keys file
const keys = require('./config/keys');

const cookieSession = require('cookie-session');
const passport = require('passport');
const path = require('path');

//Import mongoose module to connect to your mongodb database instance using it's connection string.
const mongoose = require('mongoose');

//requiring passport file
require('./services/passport');

//Import express server
const express = require('express');

//Set instance of the express server to a variable
const app = express();

//*** Middlewares ***//

//Configure body-parser so you can retrieve values from the req.body, if not the req.body will be undefined.
const bodyParser = require('body-parser');
//For initializing the req.body. If the middleware is not used, the req.body is undefined.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Use cors for enable cross origin requests
const cors = require('cors');
//Use when retrieving data from request session. Middleware we defined earlier.
app.use(cors());

//*** setting cookie ***//
//creating the cookie
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  }),
);
//Tell passport to use cookies to manage authentication - middlewares
app.use(passport.initialize());
app.use(passport.session());

//*** Routes ***//

app.use('/test', require('./routes/indexRoutes'));
app.use('/auth', require('./routes/authRoutes'));
app.use('/api', require('./routes/userRoutes'));
app.use('/api/products', require('./routes/productsRoutes'));

//Connecting to mongoDB
mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    if (err) {
      console.log('Database Error----------------', err);
    }
    console.log('Connected to database');
  },
);

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

//Define the Port your will be running your server on.
//NOTE: Make sure the Port is the same as the proxy.
const PORT = process.env.PORT || 5000;

//Listining on the PORT
app.listen(PORT, () => console.log('Listening on port: ', PORT));
