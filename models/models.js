/**
 * Class containing all models necessary to store data
 * @author Michel Roesler
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Schema for Datacenter model
 * @type {*|Schema}
 */
var DatacenterSchema = new Schema({
    name: String,
    address: {
        street: String,
        number: Number,
        zip: { type: Number, min:6, max: 6},
        locality: String
    },
    web: String,
    mail: String,
    company: String,
    surveys: [{type: Schema.ObjectId , ref: 'Survey'}],
    createdOn: { type: Date,   default: Date.now}
});

/**
 * Schema for Survey model
 * @type {*|Schema}
 */
var SurveySchema = new Schema({
    company: String,
    createdBy: { type: Schema.ObjectId , ref: 'User'},
    createdOn: { type: Date,   default: Date.now}
    // TODO add survey fields
});

/**
 * Schema for User model
 * @type {*|Schema}
 */
var UserSchema = new Schema({
    username: String,
    forname: String,
    lastname: String,
    role: String,
    password: { type: String, default: 'yourPassword'},
    mail: String,
    company: String,
    createdOn: { type: Date, default: Date.now}
});

/**
 * Exporting data models
 * @type {*|Model}
 */
mongoose.model('Datacenter', DatacenterSchema);
mongoose.model('Survey', SurveySchema);
mongoose.model('User', UserSchema);