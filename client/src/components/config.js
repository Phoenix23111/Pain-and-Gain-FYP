// src/components/config.js
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "Assistant",
  initialMessages: [
    createChatBotMessage(`Hi, I'm here to help. What can I do for you?`),
  ],
  floating: true,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#007bff",
    },
    chatButton: {
      backgroundColor: "#007bff",
    },
  },
};

export default config;
