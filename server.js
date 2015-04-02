// Import the Modules
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

// Defining the Routes for our API
var authentication = require('./routes/auth');
var datacenters = require('./routes/datacenters');
var users = require('./routes/users');

// configure app
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

var port = process.env.PORT || 6767; // where the application will run


// connect to our database
mongoose.connect('mongodb://it4green_mongoadmin:woarojHayb@localhost:20877/benchmark', {auth:{authdb:"admin"}});

// A simple middleware to use for all Routes and Requests
router.use(function(req, res, next) {
    // Give some message on the console
    console.log('An action was performed by the server.');
    // Is very important using the next() function, without this the Route stops here.
    next();
});

// register the route
app.use('/auth', authentication);
app.use('/datacenters', datacenters);
app.use('/users', users);

// start the server
app.listen(port);
console.log('Magic happens on port ' + port);
