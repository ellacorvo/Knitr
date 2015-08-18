var mongoose = require('mongoose');

var applySchema = mongoose.Schema({
   name    : {type: String},
   yards   : {type: String}
});

var Project = mongoose.model('projects', applySchema);

module.exports = Project;