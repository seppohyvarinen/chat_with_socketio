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

let users = [];

io.on("connection", (client) => {
  client.on("message", (message) => {
    let u = users.find((o) => o.id === client.id);
    console.log(client.id);

    io.emit("message", {
      text: message,
      date: new Date().toISOString(),
      user: u.name,
      id: client.id,
    });
  });
  client.on("username", (userName) => {
    io.emit("message", {
      text: "Welcome to the chat " + userName,
      date: new Date().toISOString(),
      user: "Server",
      id: "server",
    });

    const user = {
      name: userName,
      id: client.id,
    };
    users.push(user);
  });
});

server.listen(PORT, () => console.log("Server running on port: " + PORT));
