/**
 * Rest-API for Users
 * @author Michel Roesler
 */
var express = require('express');
var router = express.Router();
var User = require('./models/user');


// When accessing the user Routes
router.route('/')

    // create a user when the method passed is POST
    .post(function(req, res) {
        console.log(req);
        // create a new instance of the User model
        var user = new User();

        // set the speakers properties (comes from the request)
        user.forname = req.body.forname;
        user.lastname = req.body.lastname;
        user.mail = req.body.mail;
        user.company = req.body.company;
        user.schedule = req.body.schedule;

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

            // set the datacenters properties (comes from the request)
            user.forname = req.body.forname;
            user.lastname = req.body.lastname;
            user.mail = req.body.mail;
            user.company = req.body.company;
            user.schedule = req.body.schedule;

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

    // delete the datacente by id
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