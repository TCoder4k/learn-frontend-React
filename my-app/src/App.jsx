import { useState, useRef, useEffect } from "react";
import { Chatbot } from "supersimpledev";
import RobotProfileImage from "./assets/chatbot.png";
import UserProfileImage from "./assets/sontungmtp.jpg";
import "./App.css";

function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    if (inputText.trim() === "") return;
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];
    setInputText("");
    const response = Chatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  }
  return (
    <div className="input-area">
      <input
        onKeyDown={handleKeyDown}
        onChange={saveInputText}
        placeholder="Send a message to ChatBot"
        value={inputText}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

//This  place is display and  logic of chat messages
function ChatMessage({ message, sender }) {
  return (
    <div className={`message ${sender}`}>
      {sender === "robot" && <img src={RobotProfileImage} width="40" />}
      <span>{message}</span>
      {sender === "user" && <img src={UserProfileImage} width="40" />}
    </div>
  );
}

//This place contains loop chat ms
function ChatMessages({ chatMessages }) {
  //create ref
  const messageEndRef = useRef(null);
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavier: "smooth" });
  }, [chatMessages]);
  return (
    <div className="messages">
      {chatMessages.map((chatMessage) => (
        <ChatMessage
          message={chatMessage.message}
          sender={chatMessage.sender}
          key={chatMessage.id}
        />
      ))}
      <div ref={messageEndRef} />
    </div>
  );
}

function App() {
  const [chatMessages, setChatMessages] = useState([
    {
      message: "Hello Chatbot",
      sender: "user",
      id: "id1",
    },
    {
      message: "Hello! How can i help you",
      sender: "robot",
      id: "id2",
    },
    {
      message: "Get data",
      sender: "user",
      id: "id3",
    },
    {
      message: "Today is June 9",
      sender: "robot",
      id: "id4",
    },
  ]);
  return (
    <div className="chat-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}
export default App;
