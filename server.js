'use strict';

var express = require('express'),
    app = express(),
    path = require('path'),
    ghost = require('ghost'),
    appDir = path.dirname(require.main.filename),
    port = process.env.PORT || 8080;
    
app.use(express.static(path.join(appDir)));
app.get('/', function(req, res) {
  res.sendFile(appDir + '/index.html');
});

ghost({
  config: path.join(__dirname, 'config.js')
}).then(function (ghostServer) {
  app.use(ghostServer.config.paths.subdir, ghostServer.rootApp);
  ghostServer.start(app);
  console.log('Ghost server running');
}).catch(function (err) {
    console.log(err, err.context, err.help);
});