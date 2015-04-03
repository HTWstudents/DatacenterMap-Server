var mongoose = require('mongoose');
var Schema = mongoose.Schema;


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

module.exports = mongoose.model('Survey', SurveySchema);