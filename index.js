/* 
 * app.js - Main Execution file for the Modus Assignment 
 * Author: Ojas Kale
 * Date: 12th May 2018
 * Version: 1
 */

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 8888;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// Set up routes 
vehicleRouter = require('./routes/vehicleRoutes')();
app.use('/vehicles', vehicleRouter);


// Base route
baseRouter = require('./routes/baseRoutes')();
app.use('/', baseRouter);

app.listen(port, function() {
   console.log('Server started by gulp on port ' + port); 
});
