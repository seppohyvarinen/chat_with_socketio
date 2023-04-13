import "./App.css";
import React from "react";
import moment from "moment";

const MessageBox = ({ messages }) => {
  return (
    <div className="messagebox">
      {messages.map(({ text, date, user }) => (
        <div className="message">
          <div className="messagedata">
            {user} {moment(date).format("HH:mm:ss")}
          </div>
          <div className="messagetext">{text}</div>
        </div>
      ))}
    </div>
  );
};

export default MessageBox;
