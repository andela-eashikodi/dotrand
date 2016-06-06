'use strict';

var express = require('express'),
    app = express(),
    routes = require('./routes'),
    engines = require('consolidate'),
    path = require('path'),
    appDir = path.dirname(require.main.filename);

app.use(express.static(path.join(appDir + '/public')));
app.set('views', __dirname + '/templates');
app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.get('/', routes.index);
app.get('/template/:name', routes.template);

module.exports = app;