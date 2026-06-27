import { useState } from "react";
import "./App.css";
import { ChatInput } from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";

//This  place is display and  logic of chat messages

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
