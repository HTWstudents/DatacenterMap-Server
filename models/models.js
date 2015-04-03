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
        locality: String,
    },
    web: String,
    mail: String,
    company: String,
    // fill survey by datacenter.ofObjectId.push(survey)
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
});

/**
 * Schema for User model
 * @type {*|Schema}
 */
var UserSchema = new Schema({
    name: {
        forname: String,
        lastname: String
    },
    password: { type: String, default: 'test'},
    mail: String,
    createdOn: { type: Date, default: Date.now}
});

/**
 * Exporting data models
 * @type {*|Model}
 */
module.exports = mongoose.model('Datacenter', DatacenterSchema);
module.exports = mongoose.model('Survey', SurveySchema);
module.exports = mongoose.model('User', UserSchema);