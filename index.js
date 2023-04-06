const http = require("http");
const express = require("express");
const socketio = require("socket.io");
let cors = require("cors");
const app = express();
const server = http.createServer(app);
const PORT = 8080 || process.env.PORT;

app.use(express.static("frontend/build"));

app.use(cors());

const io = socketio(server);

io.on("connection", (client) => {
  io.emit("message", "Welcome to the chat!");

  client.on("message", (message) => {
    io.emit("message", message);
  });
});

server.listen(PORT, () => console.log("Server running on port: " + PORT));
