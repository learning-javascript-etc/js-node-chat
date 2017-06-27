//console.log('hello from our node script!');
// before being able to run this had to:
// 1 download & install node.js
// 2 run npm init -y in this directory
// 3 run npm install express
//
// Express handles http communications afaict
//
// load express
var express = require('express');
var app = express();

// load http
var http = require('http');
// connect http & express
var server = http.Server(app);

app.use(express.static('client'));

// have express listen for http calls on port 8080
server.listen(8080, function() {
  console.log('Chat server running');
});

// before inserting following code
// had to install http://socket.io
// 1 npm install socket.io
// 2 need to include js script in the html:
// <script src="/socket.io/socket.io.js"></script>
var io = require('socket.io')(server);

io.on('connection', function (socket) {
  socket.on('message', function (msg) {
    io.emit('message', msg);
  });
});
