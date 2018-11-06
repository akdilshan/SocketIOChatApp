var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var redis=require('redis');
//var client=redis.createClient();

server.listen(8080);
// WARNING: app.listen(80) will NOT work here!

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  socket.emit('message', { message: 'dilshan' });
  socket.on('message', function (data) {
    console.log(data);
    socket.broadcast.emit('message', data);
  });



});