const app = require('express')();
const http = require('http').Server(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
  }
});
app.get('/', (req, res) => {
  res.send('Hello world');
});

io.on('connection' , (socket) => {
  console.log('user connected'+ socket.id);
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  
  //socket.broadcast.emit("hello", "world");
  socket.emit("init", {body : [{message:"Hello World",sender:"Mac McMaggan",time:"20h05",state:true},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id liberoermentum vulputate",sender: "Damian Danay",time:"18h36",state:false}]});


})



http.listen(4000, () => {
  console.log('listening on Port:4000');
});
