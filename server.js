const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static('dist'))

io.on('connection', (socket) => {
  console.log("User connected")
  socket.on("message",m => {
    console.log(m)
    socket.broadcast.emit('message', m);
  })
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});