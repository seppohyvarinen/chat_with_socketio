import { useState } from "react";

const MessageForm = ({ socket }) => {
  const [message, setMessage] = useState("");
  const submit = (event) => {
    event.preventDefault();
    socket.emit("message", message);
    setMessage("");
  };
  return (
    <form className="mForm" onSubmit={submit}>
      <input
        type="text"
        placeholder="Type your message here..."
        onChange={(e) => setMessage(e.currentTarget.value)}
        value={message}
      />
      <button>Send</button>
    </form>
  );
};

export default MessageForm;
