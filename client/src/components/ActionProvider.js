// src/components/ActionProvider.js
import axios from "axios";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  async handleMessage(message) {
    try {
      const response = await axios.post("http://localhost:3001/api/chatbot", {
        message,
      });
      const botMessage = this.createChatBotMessage(response.data.message);
      this.setChatbotMessage(botMessage);
    } catch (error) {
      const errorMessage = this.createChatBotMessage(
        "Sorry, I couldn't process your request. Please try again."
      );
      this.setChatbotMessage(errorMessage);
    }
  }

  setChatbotMessage(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
