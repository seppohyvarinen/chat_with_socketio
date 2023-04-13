import "./App.css";
import { useState } from "react";

import Chat from "./Chat";
import Username from "./Username";

function App() {
  const [startChat, setStartChat] = useState(false);
  const [userName, setUserName] = useState("");

  return (
    <div className="App">
      {startChat ? (
        <Chat userName={userName} />
      ) : (
        <Username
          setStartChat={setStartChat}
          userName={userName}
          setUserName={setUserName}
        />
      )}
    </div>
  );
}

export default App;
