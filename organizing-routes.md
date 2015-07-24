
[Source](http://start.jcolemorrison.com/quick-tip-organizing-routes-in-large-express-4-x-apps/ "Permalink to Organizing Routes in Large Express 4.x Apps")

# Organizing Routes in Large Express 4.x Apps

Instead of bogging down your main `app.js` file with every single route, try and organize it with the Express Routing mindset as stated in their Docs.

&gt; A router is an isolated instance of middleware and routes. Routers can be thought of as "mini" applications only capable of performing middleware and routing. Every express application has a built in app router.

So let's pretend you have a setup like so:

    your-express-project/
        client/
        server/
            app.js
            *other files and directories**

In your main file (usually `server/app.js`) get rid of anything route related. Make the following directories and file in your root `server` directory:

    your-express-project/
        client/
        server/
            router/
                routes/
                    signup.js
                index.js
            app.js
            *other files and directories*

In your `app.js` file, just before the `module.exports = app;` portion add the following:

    // Towards bottom of app.js

    /**
      * Router
      */
    var router = require('./router')(app);

    // Error Handling
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
    });

    module.exports = app;

And then in your `server/router/index.js` put the following in:

    // server/router/index.js

    module.exports = function (app) {
        app.use('/signup', require('./routes/signup'));
    };

Now you can turn the `/signup` route into it's own contained area.

    // server/router/routes/signup.js

    var express = require('express');
    var router = express.Router();

    // POST /signup
    router.post('/', function (req, res) {
        // handle a post request to this route
    });

    // GET /signup/info
    router.get('/info', function (req, res) {
        // handle a get request to this route
    });

    // etc...

    module.exports = router;

What we did in the above is make it so that our `app.js` file only pulls in 1 route related file. Our `router/index.js` file serves as the entry port where we can look and get a nice snapshot of all of our applications routes. Each individual route is housed in it's own file located in the `router/routes/` directory.

From now on, everytime you want to add a new route, create a new file for it in `router/routes/` and add

`app.use('/my-new-route/', require('./routes/my-new-route));`

Inside of your `router/index.js` file.  