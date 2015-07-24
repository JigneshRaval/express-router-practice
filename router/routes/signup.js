// Route for the signup

var express = require('express');
var router = express.Router();

// Home page route ( http://localhost:8080/signup )
router.get('/', function( req, res ){
	res.send("Home page");
});

// Info page route ( http://localhost:8080/signup/info )
router.get('/info', function( req, res ){
	// write your logic here when URL "http://localhost:8080/signup/info" hits in the browser
	res.send("You are calling Info router");
	console.log("You are calling Info router");
});

// Other Examples
//==============================

// route with parameters ( http://localhost:8080/hello/:name )
router.get('/hello/:name',function( req, res ){
	res.send('Hello '+req.params.name);
});

// Export router so index.js in "Routers" folder can use it through
// app.use('/signup', require('./routes/signup'));
module.exports = router;