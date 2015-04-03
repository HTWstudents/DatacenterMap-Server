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
    name: { type: String, default: '' },
    street: { type: String, default: '' },
    number: { type: String, default: '' },
    locality:{ type: String, default: '' },
    zip: { type: String, default: '' },
    web: { type: String, default: '' },
    mail: { type: String, default: '' },
    company: { type: String, default: '' },
    createdOn: { type: Date,   default: Date.now}
});

/**
 * Schema for Survey model
 * @type {*|Schema}
 */
var SurveySchema = new Schema({
    name: { type: String, default: '' },
    street: { type: String, default: '' },
    number: { type: String, default: '' },
    locality: { type: String, default: '' },
    zip: { type: String, default: '' },
    web: { type: String, default: '' },
    mail: { type: String, default: '' },
    company: { type: String, default: '' },
    createdOn: { type: Date,   default: Date.now}
});

/**
 * Schema for User model
 * @type {*|Schema}
 */
var UserSchema = new Schema({
    forname: { type: String, default: '' },
    lastname: { type: String, default: '' },
    company: { type: String, default: '' },
    mail: { type: String, default: '' },
    createdOn: { type: Date,   default: Date.now}
});

/**
 * Exporting data models
 * @type {*|Model}
 */
module.exports = mongoose.model('Datacenter', DatacenterSchema);
module.exports = mongoose.model('Survey', SurveySchema);
module.exports = mongoose.model('User', UserSchema);