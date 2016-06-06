'use strict';

exports.index = function(req, res){
    res.render('index.html');
};

exports.template = function (req, res) {
    var name = req.params.name;
    res.render(name + ".html");
};