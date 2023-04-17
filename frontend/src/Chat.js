import "./App.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import MessageBox from "./MessageBox";
import MessageForm from "./MessageForm";

const socket = io("/", {
  transports: ["websocket", "polling"],
});

const Chat = ({ userName }) => {
  const [messages, setMessages] = useState([]);
  const [clientId, setClientId] = useState(socket.id);

  useEffect(() => {
    socket.emit("username", userName);

    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
      console.log(clientId);
    });
  }, []);
  useEffect(() => {
    console.log(messages);
  }, [messages]);
  return (
    <div className="App">
      <MessageBox messages={messages} clientId={socket.id} />
      <MessageForm socket={socket} />
    </div>
  );
};

export default Chat;
