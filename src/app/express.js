var express = require('express'),
    app = express(),
    routes = require('./routes'),
    engines = require('consolidate'),
    path = require('path'),
    appDir = path.dirname(require.main.filename);
    
// app.use(express.static(__dirname + '/src/'));
// app.set('views', __dirname + '/templates');
// app.set('view engine', 'html');
// app.use(express.static(path.join(appDir + '/src/app/')));
app.use(express.static(path.join(appDir + '/src')));
app.set('views', __dirname + '/templates');
app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

module.exports = app;