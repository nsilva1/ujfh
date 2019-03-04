const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/UserAuth');

var app = express();
var port = process.env.PORT || 3123;

//Body Parser middleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//MongoDB config
const db = require('./config/keys');

//Connect to MongoDB
mongoose
  .connect(db.mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

//passport middleware
app.use(passport.initialize());

//passport config
require('./config/passport')(passport);

//use routes
app.use('/api/users', users);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
