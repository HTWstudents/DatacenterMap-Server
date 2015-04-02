/**
 * Rest-API for Registration and Login
 * @author Michel Rösler
 */
var express = require('express');
var router = express.Router();

router.route('/signup')
    .get(function(req,res){
        // check cookie for saved credentials
    })
    .post(function(req,res){
        // check if username is taken
        // != register user
    });

router.route('/signin')
    .post(function(req,res){
        // check creadentials
    });

router.route('/logout')
    .get(function(req,res){
        // redirect to landing page
    });


module.exports = router;