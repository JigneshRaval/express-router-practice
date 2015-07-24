// server.js

// BASE SETUP
//===========================

var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

// ROUTES
//===========================

// we will create our router here

// get an instance of router
var router = express.Router();

// Home page route (http://localhost:8080)
router.get('/', function( req, res ){
	res.send("Home page");
});

// "About" page route (http://localhost:8080/about)
router.get('/about', function( req, res ){
	res.send("About page");
});

// route with parameters ( http://localhost:8080/hello/:name )
router.get('/hello/:name',function( req, res ){
	res.send('Hello '+req.params.name);
});

// apply the router to our application
app.use('/', router);

// START THE SERVER
//===========================

app.listen(port);
console.log("Your app is listening to port :", port);