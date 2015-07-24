// Export main route

// This file will be the entry point of serving different routes 
// available in "./router/routes/" folder

module.exports = function(app) {
	
	// Example route :: signup route
	app.use('/signup', require('./routes/signup'));
	
	// Add more routes here
	// For Example : aboutus page route
	app.use('/aboutus', require('./routes/aboutus'));
};