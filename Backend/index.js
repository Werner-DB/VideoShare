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
  socket.emit("init", {body : [{message:"Hello World",sender:"Mac McMaggan"},{message:"Coucou  bruv",sender: "Damian Danay"}]});


})



http.listen(4000, () => {
  console.log('listening on Port:4000');
});
