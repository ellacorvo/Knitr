var mongoose = require('mongoose');

var applySchema = mongoose.Schema({
   yards    : {type: String},
   color    : {type: String}
});

var Yarn = mongoose.model('yarns', applySchema);

module.exports = Yarn;