/* global process */
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
var port = process.argv[2] || 8181;

//step 3
//##########################################
//middleware:
//##########################################

app.use('/', bodyParser.json());
app.use('/', cors());
/* Middleware to render all of our public files. Any files 
of the public folder will be renderd if you use them*/
app.use(express.static(__dirname + '/public'));

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
//********************************************************************************************
//GET api occupations (postman: /api/occupations?order=asc)
// app.get('/api/occupations', function (req, res) {
// 	if (req.query.order === 'asc') {
// 		res.json({ occupations: occupations.sort() });
// 	} 
// 	else if (req.query.order === 'desc') {
// 		res.json({ occupations: occupations.sort().reverse() });
// 	} 
// 	else {
// 		res.json({ Occupations: occupations });
// 	}
// });
// app.get('/api/occupations/latest', function (req, res) {
// 	res.json({ latestOccupation: occupations[occupations.length - 1] })
// });
//#######################################################################
//these both work ^ v
//#######################################################################
//GET api occupations (postman: /api/occupations?order=asc)
app.get('/api/occupations', function (req, res) {
	switch (req.query.order) {
		case 'asc':
			res.json({
				occupations: occupations.sort()
			});
			break;
		case 'desc':
			res.json({
				occupations: occupations.sort().reverse()
			});
			break;
		default:
			res.json({
				Occupations: occupations
			});
	};
});

app.get('/api/occupations/latest', function (req, res) {
	res.json({
		latestOccupation: occupations[occupations.length - 1]
	})
});

//********************************************************************************************
//step 4
//##########################################
//post requests
//##########################################
//PUT /api/name:
app.put('/api/name', function (req, res) {
	name = req.body.name;
	res.json(name);
});
//PUT /api/location:
app.put('/api/location', function (req, res) {
	location = req.body.location
	res.json(location);
});
//POST /api/hobbies:
app.post('/api/hobbies', function (req, res) {
	hobbies.push(req.body.hobbies);
	res.json({hobbies: hobbies});
});
app.post('/api/occupations', function (req, res) {
	occupations.push(req.body.occupations);
	res.json({occupations: occupations});
});

//Step 5
//GET - POST /api/skills: (Postman: /api/skills?experience=Intermediate)
app.route('/api/skills')
	.get(function(req, res){
		switch (req.query.experience){
			case 'Beginner':
				res.json({skills: experience(skills, 'Beginner')})
				break;
			case 'Intermediate':
				res.json({skills: experience(skills, 'Intermediate')})
				break;
			case 'Advanced':
				res.json({skills: experience(skills, 'Advanced')})
				break;
			case 'Professional':
				res.json({skills: experience(skills, 'Professional')})
				break;
			default:
				res.json({skills: skills});
		}
		
	})
	.post(function(req, res){
		
	})

//Step 2
//##########################################
//Starting Server:
//##########################################
app.listen(port, function (err) {
	if (err) {
		console.log(err);
	} else {
		console.log('Listening on port: ' + port);
	}
});


var name = {
	name: 'Brendan Dayley'
};

var location = {
	location: 'Provo, UT'
};

var hobbies = ['Programming', 'Airsoft', 'Rappelling', 'Jeeping', 'Hiking', 'Camping'];

var occupations = [
	'4th Dungeon Master of Zork',
	'Co-Author',
	'Big 5 Sporting Goods',
	'Scout camp staff',
	'Student At DevMountain'
	];
	
var skills = [
	{
		id: '1',
		name: 'JavaScript',
		experience: 'Intermediate',
	},
	{
		id: '2',
		name: 'AngularJS',
		experience: 'Intermediate',
	},
	{
		id: '3',
		name: 'Jquery',
		experience: 'Beginner',
	},
	{
		id: '4',
		name: 'NodeJS',
		experience: 'Beginner',
	},
]

var experience = function (arr, experience) {
	var container = [];
	for (var i = 0; i < arr.length; i++){
		for (var key in arr[i]){
			if (arr[i][key] === experience) {
				container.push(arr[i]);
			}
		}
	}
	return container;
};
