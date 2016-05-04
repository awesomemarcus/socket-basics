var socket = io();

socket.on('connect', function() {
  console.log('Connected to socket.io server!');
});


socket.on('message', function(message) {
  console.log('New message:');
  console.log(message);

  jQuery('.messages').append('<p>' + message.name + ": " + message.text +
    '</p>');
});

var $form = jQuery('#message-form');

$form.on('submit', function(event) {
  event.preventDefault();

  socket.emit('message', {
    text: $form.find('input[name=message]').val(),
    name: $form.find('input[name=name]').val()
  });

  $('input[name=message]').val('');
});
