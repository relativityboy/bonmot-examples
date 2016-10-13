/**
 * TODO: Add require and other libraries, incl test libs. Get server setup to route everything from node_modules.
 */

var express = require('express');
var app = express();




app.get('/', function (req, res) {
  res.send('Hello World!');
});

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
app.use('/libs/require-css/', express.static(__dirname + '/node_modules/require-css/'));
app.use('/', express.static(__dirname + '/public/'));
/*app.get('/:name', function (req, res, next) {
  console.log(req.params.name);
  var options = {
    root: __dirname + '/public/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  var fileName = req.params.name;
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', fileName);
    }
  });

});*/

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});