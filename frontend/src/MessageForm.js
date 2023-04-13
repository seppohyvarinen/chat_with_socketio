import { useState } from "react";

const MessageForm = ({ socket }) => {
  const [message, setMessage] = useState("");
  const submit = (event) => {
    event.preventDefault();
    socket.emit("message", message);
    setMessage("");
  };
  return (
    <form onSubmit={submit}>
      <label>
        Send Message
        <input
          type="text"
          onChange={(e) => setMessage(e.currentTarget.value)}
          value={message}
        />
        <button>Start chat</button>
      </label>
    </form>
  );
};

export default MessageForm;
