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
app.use('/', bodyParser.json());
app.use('/', cors());

//##########################################
//port:
//##########################################
var port = process.argv[2] || 8181;

//step 3
//##########################################
//setting the headers:
//##########################################
var allowCrossDomain = function (req, res, next) {
	res.header('Access-Controll-Allow-Origin', '*');
	res.header('Access-Controll-Allow-Methods', 'OPTIONS, GET, POST');
	res.header('Access-Contoll-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	if ('OPTIONS' === req.method) {
		res.send(200);
	} else{
		next();
	}
};
app.use('/', allowCrossDomain);

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