'use strict';

var express = require('express'),
    app = express(),
    path = require('path'),
    appDir = path.dirname(require.main.filename),
    port = process.env.PORT || 8080;
    
app.use(express.static(path.join(appDir)));
app.get('/', function(req, res) {
  res.sendFile(appDir + '/index.html');
});

app.listen( port, function (error) {
  if (error) {
    console.log(error);
  }
  console.log('App started on port: ' + port);
});

module.exports = app;