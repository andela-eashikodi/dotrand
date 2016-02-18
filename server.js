'use strict';

var app = require('./src/app/express'),
    ghost = require('ghost'),
    port = process.env.PORT || 8080;

ghost({
  config: __dirname + '/src/blog/ghost.js'
}).then(function (ghostServer) {
  app.use(ghostServer.config.paths.subdir, ghostServer.rootApp);
  app.use(function(req, res) {
		res.status(404);
		res.render('partials/404.html');
	});
  ghostServer.start(app);
}).catch(function (err) {
    console.log(err, err.context, err.help);
});