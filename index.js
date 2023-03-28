const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const PORT = 8080 || process.env.PORT;

app.use(express.static("frontend/build"));

const io = socketio(server);

io.on("connection", (socket) => {
  console.log("New WebSocket connection detected");
});

server.listen(PORT, () => console.log("Server running on port: " + PORT));
