import RobotProfileImage from "../assets/chatbot.png";
import UserProfileImage from "../assets/sontungmtp.jpg";
import "./ChatMessage.css";
export function ChatMessage({ message, sender }) {
  return (
    <div className={`message ${sender}`}>
      {sender === "robot" && <img src={RobotProfileImage} width="40" />}
      <span>{message}</span>
      {sender === "user" && <img src={UserProfileImage} width="40" />}
    </div>
  );
}
