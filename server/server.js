const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

app.use(express.static("dist"))

io.on("connection", (socket) => {
  console.log("connected")
  socket.on("message", m => {console.log(m)})
});

httpServer.listen(3000);