var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
  var userRequestColor = "";
  socket.on('change_color',function(data){
    userRequestColor	=	data;
    console.log(data);
   socket.broadcast.emit('sent_color',userRequestColor);
  });
  

 
 

  console.log('a user connected');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
