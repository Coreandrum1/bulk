import { useState } from "react";
import "./App.css";
import { Message } from "./types/globalTypes";
import TypeWriterContainer from "./components/TypeWriterContainer";

function App() {
  const [messageHistory, setMessageHistory] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>("");

  return (
    <main>
      <section className="title">
        <h1>AI Tool with Chatbot</h1>
        <p>
          AI Tool is a web application that allows users to consult upskilling
          content and be assisted by a chatbot.
        </p>
      </section>
      <section className="chat-history">
        {messageHistory
          .slice(0)
          .reverse()
          .map((message) => {
            return message.type === "user" ? (
              <div key={message.id} className="user">
                {message.message}
              </div>
            ) : (
              <TypeWriterContainer key={message.id} message={message} />
            );
          })}
      </section>
      <section className="chat-input">
        <form>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setMessageHistory([
                ...messageHistory,
                {
                  message: message,
                  type: "user",
                  id: new Date().toISOString(),
                },
                {
                  message:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                  type: "bot",
                  id: new Date().toISOString() + "bot",
                },
              ]);
              setMessage("");
            }}
          >
            Send
          </button>
        </form>
      </section>
    </main>
  );
}

export default App;
