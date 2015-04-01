// Import the Modules
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

// configure app
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 6767; // where the application will run

// Import Mongoose


// connect to our database
//mongoose.connect('mongodb://it4green_mongoadmin:woarojHayb@localhost:20877/benchmark', {auth:{authdb:"admin"}});

var Datacenter = require('./models/datacenter');

// Defining the Routes for our API

// Start the Router
var router = express.Router();

// A simple middleware to use for all Routes and Requests
router.use(function(req, res, next) {
    // Give some message on the console
    console.log('An action was performed by the server.');
    // Is very important using the next() function, without this the Route stops here.
    next();
});

// Default message when access the API folder through the browser
router.get('/', function(req, res) {
    // Give some Hello there message
    res.json({ message: 'Hello SPA, the API is working!' });
});

// When accessing the speakers Routes
router.route('/datacenters')

    // create a datacenter when the method passed is POST
    .post(function(req, res) {
        console.log(req);
        // create a new instance of the Datacenter model
        var datacenter = new Datacenter();

        // set the speakers properties (comes from the request)
        datacenter.name = req.body.name;
        datacenter.street = req.body.street;
        datacenter.number = req.body.number;
        datacenter.locality = req.body.locality;
        datacenter.zip = req.body.zip;
        // try if it is possible to put an object | if not put lat: value, lng: value separately
        datacenter.location = req.body.location;
        datacenter.web = req.body.web;
        datacenter.mail = req.body.mail;
        datacenter.schedule = req.body.schedule;

        // save the data received
        datacenter.save(function(err) {
            if (err)
                res.send(err);

            // give some success message
            res.json({ message: 'datacenter successfully created!' });
        });
    })

    // get all the datacenters when a method passed is GET
    .get(function(req, res) {
        Datacenter.find(function(err, datacenters) {
            if (err)
                res.send(err);

            res.json(datacenters);
        });
    });

// on accessing datacenter Route by id
router.route('/datacenters/:datacenter_id')

    // get the datacenter by id
    .get(function(req, res) {
        Datacenter.findById(req.params.datacenter_id, function(err, datacenter) {
            if (err)
                res.send(err);
            res.json(datacenter);
        });
    })

    // update the datacenter by id
    .put(function(req, res) {
        Datacenter.findById(req.params.datacenter_id, function(err, datacenter) {

            if (err)
                res.send(err);

            // set the datacenters properties (comes from the request)
            datacenter.name = req.body.name;
            datacenter.company = req.body.company;
            datacenter.title = req.body.title;
            datacenter.description = req.body.description;
            datacenter.picture = req.body.picture;
            datacenter.schedule = req.body.schedule;

            // save the data received
            datacenter.save(function(err) {
                if (err)
                    res.send(err);

                // give some success message
                res.json({ message: 'datacenter successfully updated!' });
            });

        });
    })

    // delete the datacente by id
    .delete(function(req, res) {
        Datacenter.remove({
            _id: req.params.datacenter_id
        }, function(err, datacenter) {
            if (err)
                res.send(err);

            // give some success message
            res.json({ message: 'datacenter successfully deleted!' });
        });
    });


// register the route
app.use('/api', router);

// start the server
app.listen(port);
console.log('Magic happens on port ' + port);
