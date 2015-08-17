var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Knitr');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);
app.post('/yarns', function(req, res){
	console.log(req.body);
	var newYarn = new Yarn({ 
		name : req.body.yards, 
		color : req.body.color
	});
	newYarn.save(function(){
		res.render('yarns');
	})
	console.log(newYarn);
});

var server = app.listen(5395, function() {
	console.log('Express server listening on port ' + server.address().port);
});
