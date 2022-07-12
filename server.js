const fs = require('fs');
const host = fs.existsSync('./dist');

const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');

const app = express();
const httpServer = host ? createServer(app) : createServer();
const io = new Server(httpServer);

const adminPasswds = ["a2FwdXJu"]

if (host) {
  app.use(express.static('dist'));
  httpServer.listen(3000);
} else {
  httpServer.listen(3000);
}

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
