/**
 * Router controlling each data model routing
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/**
 * Rest-API for Datacenters
 * @author Michel Roesler
 */
var Datacenter = mongoose.model('Datacenter');

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

        // save the data received
        datacenter.save(function(err) {
            if (err) {
                res.send(err);
            }
            // give some success message
            res.json({ message: 'datacenter successfully created!' });
        });
    })

    // get all the datacenters when a method passed is GET
    .get(function(req, res) {
        Datacenter.find(function(err, datacenters) {
            if (err){
                res.send(err);
            }

            res.json(datacenters);
        });
    });

// on accessing datacenter Route by id
router.route('/datacenters/:datacenter_id')

    // get the datacenter by id
    .get(function(req, res) {
        Datacenter.findById(req.params.datacenter_id, function(err, datacenter) {
            if (err) {
                res.send(err);
            }
            res.json(datacenter);
        });
    })

    // update the datacenter by id
    .put(function(req, res) {
        Datacenter.findById(req.params.datacenter_id, function(err, datacenter) {

            if (err){
                res.send(err);
            }

            // set the datacenters properties (comes from the request)
            datacenter.name = req.body.name;
            datacenter.company = req.body.company;
            datacenter.title = req.body.title;
            datacenter.description = req.body.description;
            datacenter.picture = req.body.picture;
            datacenter.schedule = req.body.schedule;

            // save the data received
            datacenter.save(function(err) {
                if (err) {
                    res.send(err);
                }
                // give some success message
                res.json({ message: 'datacenter successfully updated!' });
            });

        });
    })

    // delete the datacenter by id
    .delete(function(req, res) {
        Datacenter.remove({
            _id: req.params.datacenter_id
        }, function(err, datacenter) {
            if (err) {
                res.send(err);
            }
            // give some success message
            res.json({ message: 'datacenter successfully deleted!' });
        });
    });


/**
 * Rest-API for Surveys
 * @author Michel Roesler
 */
var Survey = mongoose.model('Survey');

// When accessing the speakers Routes
router.route('/surveys')

    // create a suveys when the method passed is POST
    .post(function(req, res) {
        console.log(req);
        // create a new instance of the Survey model
        var survey = new Survey();

        // set the speakers properties (comes from the request)
        survey.company = req.body.company;

        // save the data received
        survey.save(function(err) {
            if (err) {
                res.send(err);
            }
            // give some success message
            res.json({ message: 'survey successfully created!' });
        });
    })

    // get all the survey when a method passed is GET
    .get(function(req, res) {
        Survey.find(function(err, surveys) {
            if (err){
                res.send(err);
            }

            res.json(surveys);
        });
    });

// on accessing survey Route by id
router.route('/surveys/:survey_id')

    // get the survey by id
    .get(function(req, res) {
        Survey.findById(req.params.survey_id, function(err, survey) {
            if (err) {
                res.send(err);
            }
            res.json(survey);
        });
    })

    // update the survey by id
    .put(function(req, res) {
        Survey.findById(req.params.survey_id, function(err, survey) {

            if (err){
                res.send(err);
            }

            // set the survey properties (comes from the request)
            survey.name = req.body.name;
            survey.company = req.body.company;
            survey.title = req.body.title;
            survey.description = req.body.description;
            survey.picture = req.body.picture;
            survey.schedule = req.body.schedule;

            // save the data received
            survey.save(function(err) {
                if (err) {
                    res.send(err);
                }
                // give some success message
                res.json({ message: 'survey successfully updated!' });
            });

        });
    })

    // delete the survey by id
    .delete(function(req, res) {
        Survey.remove({
            _id: req.params.survey_id
        }, function(err, survey) {
            if (err) {
                res.send(err);
            }
            // give some success message
            res.json({ message: 'survey successfully deleted!' });
        });
    });

/**
 * Rest-API for Users
 * @author Michel Roesler
 */
var User = mongoose.model('User');

// When accessing the user Routes
router.route('/users')

    // create a user when the method passed is POST
    .post(function(req, res) {
        console.log(req);
        // create a new instance of the User model
        var user = new User();

        // set the Users properties (comes from the request)
        user.username = req.body.username;
        user.forname = req.body.forname;
        user.lastname = req.body.lastname;
        user.role = req.body.role;
        user.mail = req.body.mail;
        user.company = req.body.company;

        // save the data received
        user.save(function(err) {
            if (err) {
                res.send(err);
            }
            // give some success message
            res.json({ message: 'user successfully created!' });
        });
    })

    // get all the user when a method passed is GET
    .get(function(req, res) {
        User.find(function(err, users) {
            if (err){
                res.send(err);
            }

            res.json(users);
        });
    });

// on accessing user Route by id
router.route('/users/:user_id')

    // get the datacenter by id
    .get(function(req, res) {
        User.findById(req.params.user_id, function(err, user) {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    })

    // update the user by id
    .put(function(req, res) {
        User.findById(req.params.user_id, function(err, user) {

            if (err){
                res.send(err);
            }

            // set the Users properties (comes from the request)
            user.username = req.body.username;
            user.forname = req.body.forname;
            user.lastname = req.body.lastname;
            user.role = req.body.role;
            user.mail = req.body.mail;
            user.company = req.body.company;

            // save the data received
            user.save(function(err) {
                if (err) {
                    res.send(err);
                }
                // give some success message
                res.json({ message: 'user successfully updated!' });
            });

        });
    })

    // delete the User by id
    .delete(function(req, res) {
        User.remove({
            _id: req.params.user_id
        }, function(err, user) {
            if (err) {
                res.send(err);
            }
            // give some success message
            res.json({ message: 'user successfully deleted!' });
        });
    });

module.exports = router;