// initial test message:
//alert('hello from app.js');

var socket = io();

$('form').on('submit',function () {
//  #message is the id of the input field in the form
  var text = $('#initials').val();
  text += ":  " + $('#message').val();
  // instead of displaying what was entered user
  // socket library  & node.js for chat
  //  alert(text);
  socket.emit('message', text);
      $('#message').val('');
  // return false: don't send to server
  return false;
});

// listen  for server messages and add them to the html
socket.on('message', function (msg) {
  $('<li>').text(msg).appendTo('#history');
});