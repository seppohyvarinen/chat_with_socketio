import "./App.css";
import React from "react";
import moment from "moment";
import { useRef, useEffect } from "react";

const MessageBox = ({ messages, clientId }) => {
  const latestMsg = useRef(null);

  const scrollToBottom = () => {
    latestMsg.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  return (
    <div className="messagebox">
      {messages.map(({ text, date, user, id }) => (
        <div className="message">
          {clientId === id ? (
            <>
              <div className="messagedataClient">
                {user} {moment(date).format("HH:mm:ss")}
              </div>
              <div className="messagetextClient">{text}</div>
            </>
          ) : (
            <>
              <div className="messagedata">
                {user} {moment(date).format("HH:mm:ss")}
              </div>

              {id === "server" ? (
                <div className="messagetextServer">{text}</div>
              ) : (
                <div className="messagetext">{text}</div>
              )}
            </>
          )}
        </div>
      ))}
      <div ref={latestMsg} />
    </div>
  );
};

export default MessageBox;
