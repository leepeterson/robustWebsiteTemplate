// -- Express setup
//
var express = require('express');
var app = express();
var server = require('http').Server(app).listen(3000);
var io = require('socket.io').listen(3333);


// -- serve up assets folder
//
app.use('/assets', express.static(__dirname + '/web/assets'));

// -- serve up index page
//
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/web/index.html');
});

// -- Socket.io   message handlers
//
{
  console.log(' socket.io connection **CREATED**')
  socket.on('doAwesomeStuff', function(data){
    // do stuff with your data :)
  });
});
