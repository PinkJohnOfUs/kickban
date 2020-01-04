/**
 * Playground for own polymer components
 * precondition is installation of bower and polyserve via npm install -g 
 * @main webcomponents
 */
'use strict';
//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------
// first checkin team server
// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');
// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');
// create a new express server
var app = express();
// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

var server = app.listen(appEnv.port, function() {
	console.log("server starting on " + appEnv.url);
});
