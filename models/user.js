var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;


var UserSchema   = new Schema({
    forname:        { type: String, default: '' },
    lastname:       { type: String, default: '' },
    company:        { type: String, default: '' },
    mail:           { type: String, default: '' },
    createdOn:      { type: Date,   default: Date.now}
});

module.exports = mongoose.model('User', UserSchema);