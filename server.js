// Import the Modules
var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var mongoose = require('mongoose');

var app = express();

// connect to our database
//mongoose.connect('mongodb://it4green_mongoadmin:woarojHayb@localhost:20877/benchmark', {auth:{authdb:"admin"}});
mongoose.connect('mongodb://localhost/test');

//getting all models
require('./models/models');
// Defining the Routes for our API
var authentication = require('./routes/auth')(passport);
var datacenters = require('./routes/datacenters');
var surveys = require('./routes/surveys');
var users = require('./routes/users');

// configure app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

var port = process.env.PORT || 6767; // where the application will run

// register the route
app.use('/auth', authentication);
app.use('/api', users);
app.use('/api', datacenters);
app.use('/api', surveys);

//// Initialize Passport
var initPassport = require('./passport-init');
initPassport(passport);

// start the server
app.listen(port);
console.log('Magic happens on port ' + port);
