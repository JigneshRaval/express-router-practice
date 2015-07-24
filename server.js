// server.js

// BASE SETUP
//===========================

var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

// ROUTES
//===========================

// we will create our router here
var router = require('./router')(app); // this line will load "index.js" file from "router" folder

// apply the router to our application
// Error Handling
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
});

// app.use() moved to "./router/index.js" file
// app.use('/', router);

module.exports = app;
// START THE SERVER
//===========================

app.listen(port);
console.log("Your app is listening to port :", port);
