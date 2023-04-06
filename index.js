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

io.on("connection", (socket) => {
  socket.emit("viesti", "Welcome to the chat!");
});

server.listen(PORT, () => console.log("Server running on port: " + PORT));
