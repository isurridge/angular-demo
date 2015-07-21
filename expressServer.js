/**
 * Module dependencies.
 */



var fs = require('fs');
var express = require('express');
var http = require('http');
var path = require('path');
var app = express();


app.use(express.static(__dirname + '/app'));

app.use(function(req, res, next){
    res.send(404, 'Sorry cant find that!');
});


app.get('/', function (req, res) {
    res.render('index.html');
});





app.get('*', function(req, res){
    res.status(404).send();
});




http.createServer(app).listen(3000, function () {
});