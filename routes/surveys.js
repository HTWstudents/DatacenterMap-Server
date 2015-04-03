/**
 * Rest-API for Surveys
 * @author Michel Roesler
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Survey = mongoose.model('Survey');

// When accessing the speakers Routes
router.route('/surveys')

    // create a suveys when the method passed is POST
    .post(function(req, res) {
        console.log(req);
        // create a new instance of the Survey model
        var survey = new Survey();

        // set the speakers properties (comes from the request)
        survey.name = req.body.name;
        survey.street = req.body.street;
        survey.number = req.body.number;
        survey.locality = req.body.locality;
        survey.zip = req.body.zip;
        survey.location = req.body.location;
        survey.web = req.body.web;
        survey.mail = req.body.mail;
        survey.schedule = req.body.schedule;

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

module.exports = router;