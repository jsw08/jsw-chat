const fs = require('fs');
const host = fs.existsSync('./dist');

const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');

const port = 3000
const app = express();
const httpServer = host ? createServer(app) : createServer();
const io = new Server(httpServer);

const adminPasswds = ["a2FwdXJu"]

if (host) {
  app.use(express.static('dist'));
  console.log("Express server hosting folder dist.")
} else {
  console.log("Starting express server failed, no folder with the name 'dist' found in current folder.")
}

httpServer.listen(port);
console.log(`httpServer listening on port ${port}.`)


io.on('connection', (socket) => {
  console.log('connected');
  socket.on('message', (m) => {
    console.log(JSON.stringify(m));
    socket.broadcast.emit('bessage', m);
  });
  socket.on('login', m => {
    socket.emit("login", (adminPasswds.includes(Buffer.from(m, 'binary').toString('base64'))));
  })
});
