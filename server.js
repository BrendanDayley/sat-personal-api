'use strict';

//Step 1
//##########################################
//Dependnecies:
//##########################################
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
//##########################################
//Setting up libraries:
//##########################################
var app = express();


//##########################################
//port:
//##########################################
var port = 8181;

//step 3
//##########################################
//middleware:
//##########################################

app.use('/', bodyParser.json());
app.use('/', cors());

// var allowCrossDomain = function (req, res, next) {
// 	res.header('Access-Controll-Allow-Origin', '*');
// 	res.header('Access-Controll-Allow-Methods', 'OPTIONS, GET, POST');
// 	res.header('Access-Contoll-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
// 	if ('OPTIONS' === req.method) {
// 		res.send(200);
// 	} else{
// 		next();
// 	}
// };
// app.use('/', allowCrossDomain);

//##########################################
//Routes:
//##########################################
app.get('/api/name', function (req, res) {
	console.log(JSON.stringify(name));
	res.json(name)
});
app.get('/api/location', function (req, res) {
	res.json(location);
});
app.get('/api/hobbies', function (req, res) {
	if (req.query.order === 'asc') {
		res.json({
			hobbies: hobbies.sort()
		});
	} else if (req.query.order === 'desc') {
		res.json({
			hobbies: hobbies.sort().reverse()
		});
	} else {
		res.json({
			hobbies: hobbies
		});
	}
});
app.get('/api/occupations', function (req, res) {
	if (req.query.order === 'asc') {
		res.json({
			occupations: occupations.sort()
		});
	} else if (req.query.order === 'desc') {
		res.json({
			occupations: occupations.sort().reverse()
		});
	} else {
		res.json({
			Occupations: occupations
		});
	}
});
app.get('/api/occupations/latest', function (req, res) {
	res.json({
		mostRecentOccupation: occupations[occupations.length - 1]
	})
});

//Step 2
//##########################################
//Starting Server:
//##########################################
app.listen(port, function(err) {
	if(err) {
		console.log(err);
	}else{
		console.log('Listening on port: ' + port);
	}
});


var name = {name:'Brendan Dayley'};
var location = {location: 'Provo, UT'};
var hobbies = ['Programming', 'Airsoft', 'Rappelling', 'Jeeping', 'Hiking', 'Camping'];
var occupations = [
	'4th Dungeon Master of Zork', 
	'Co-Author', 
	'Big 5 Sporting Goods', 
	'scout camp staff', 
	'Student At DevMountain'
	];