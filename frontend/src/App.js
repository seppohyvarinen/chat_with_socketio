import "./App.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import MessageBox from "./MessageBox";
import MessageForm from "./MessageForm";

const socket = io("/", {
  transports: ["websocket", "polling"],
});

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });
  }, []);

  return (
    <div className="App">
      <MessageBox messages={messages} />
      <MessageForm socket={socket} />
    </div>
  );
}

export default App;
