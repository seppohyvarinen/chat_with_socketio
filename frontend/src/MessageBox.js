import "./App.css";
import React from "react";

const MessageBox = ({ messages }) => {
  return (
    <div className="messagebox">
      {messages.map((msg) => (
        <p>{msg}</p>
      ))}
    </div>
  );
};

export default MessageBox;
