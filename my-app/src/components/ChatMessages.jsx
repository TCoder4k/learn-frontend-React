import { useRef, useEffect } from "react";
import { ChatMessage } from "./ChatMessage";
import "./ChatMessages.css";

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

export default ChatMessages;
