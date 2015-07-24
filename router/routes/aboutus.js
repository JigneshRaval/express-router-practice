// aboutus.js (router)

var express = require('express');
var router = express.Router();

// aboutus page route ( http://localhost:8080/aboutus )
router.get('/', function( req, res ){
	res.send("You are on Aboutus page router.");
});

// aboutus page route with ":name" parameter ( http://localhost:8080/aboutus/hiren )
router.get('/:name', function( req, res ){
	res.send("You are on Aboutus page router with name parameter : " + req.params.name);
});

// Finally export it to index.js
module.exports = router;