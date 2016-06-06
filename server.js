'use strict';

var app = require('./public/express'),
    ghost = require('ghost'),
    port = process.env.PORT || 8080;

ghost({
  config: __dirname + '/blog/ghost.js'
}).then(function (ghostServer) {
  app.use(ghostServer.config.paths.subdir, ghostServer.rootApp);
  app.use(function(req, res) {
		res.render('index.html');
	});
  ghostServer.start(app);
}).catch(function (err) {
    console.log(err, err.context, err.help);
});