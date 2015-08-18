var Yarn = require('../models/yarn');
// var Project = require('../models/project');

var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	getYarn: function(req, res) {
        Yarn.find({}, function(err, yarn){
            res.send(yarn)
        });	
	},
    createYarn : function(req, res){
        var yarn = new Yarn(req.body);
        yarn.save(function(err, yarn){
            res.send(yarn)
        });
    }
};

module.exports = indexController;


// var apiController = {
//     get: function(req, res){
//         console.log(req.user)
//         res.send(req.user)
//     },
//     getArtPieces : function(req, res){

//         yarn.find({}, function(err, artpieces){
//             res.send(artpieces)
//         });
//     },
//     create : function(req, res){
//         var artpiece = new artPiece(req.body);
//         artpiece.save(function(err, artpiece){
//             res.send(artpiece)
//         });
//     }
// }

// module.exports = apiController;