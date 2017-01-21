/**
 * TODO: Add require and other libraries, incl test libs. Get server setup to route everything from node_modules.
 */

var express = require('express');
var app = express();




app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});
/*
app.use('/libs/jquery/', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/libs/handlebars/', express.static(__dirname + '/node_modules/handlebars/dist/'));
app.use('/libs/requirejs/', express.static(__dirname + '/node_modules/requirejs/'));
app.use('/libs/requirejs-text/', express.static(__dirname + '/node_modules/requirejs-text/'));
app.use('/libs/underscore/', express.static(__dirname + '/node_modules/underscore/'));
app.use('/libs/backbone/', express.static(__dirname + '/node_modules/backbone/'));
app.use('/libs/dw-backbone/', express.static(__dirname + '/node_modules/dw-backbone/'));
app.use('/libs/stickit/', express.static(__dirname + '/node_modules/backbone.stickit/'));
app.use('/libs/bootstrap/', express.static(__dirname + '/node_modules/bootstrap/dist/'));
app.use('/libs/bonmot/', express.static(__dirname + '/node_modules/bonmot/dist/'));
app.use('/libs/require-css/', express.static(__dirname + '/node_modules/require-css/'));*/
app.use('/', express.static(__dirname + '/public/'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});