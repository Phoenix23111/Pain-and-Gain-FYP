import React, { useState, useRef } from "react";
import "./chatbot.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
require("dotenv").config;

const CHATBOT = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: "incoming", content: "Hi there 👋\nHow can I help you today?" },
  ]);
  const [userMessage, setUserMessage] = useState("");
  const chatboxRef = useRef(null);
  const chatInputRef = useRef(null);

  const API_KEY = process.env.OPENAI_API_KEY;

  const handleChatToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async () => {
    if (!userMessage.trim()) return;

    setMessages((prev) => [
      ...prev,
      { type: "outgoing", content: userMessage.trim() },
    ]);
    setUserMessage("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { type: "incoming", content: "Thinking..." },
      ]);

      generateResponse(userMessage.trim());
    }, 600);
  };

  const generateResponse = async (message) => {
    const filterWords = [
      "education",
      "tutorial",
      "learning",
      "app",
      "development",
      "reactjs",
      "java",
      "c++",
      "c",
      "kotlin",
      "flutter",
      "dart",
      "python",
      "ai",
      "ml",
      "artificial",
      "intelligence",
      "machine algorithm",
      "nodejs",
      "expressjs",
      "angular",
      "html",
      "css",
      "javascript",
      "js",
      "vue",
      "mysql",
      "mongodb",
      "database",
      "programming",
      "fundamental",
      "compiler",
      "construction",
      "firebase",
      "data",
      "science",
      "networking",
      "php",
      "laravel",
      "operating",
      "system",
      "array",
    ];

    const containsFilterWord = filterWords.some((word) =>
      message.toLowerCase().includes(word.toLowerCase())
    );

    if (!containsFilterWord) {
      setMessages((prev) => [
        ...prev.slice(0, -1),
        {
          type: "incoming",
          content:
            "Sorry, I can only respond to messages related to education and programming.",
        },
      ]);
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
      return;
    }

    const API_URL = "https://api.openai.com/v1/chat/completions";
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
      }),
    };

    try {
      const response = await fetch(API_URL, requestOptions);
      const data = await response.json();
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { type: "incoming", content: data.choices[0].message.content.trim() },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev.slice(0, -1),
        {
          type: "incoming",
          content: "Oops! Something went wrong. Please try again.",
        },
      ]);
    } finally {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  };

  const handleInput = (e) => {
    setUserMessage(e.target.value);
    chatInputRef.current.style.height = "55px";
    chatInputRef.current.style.height = `${e.target.scrollHeight}px`;
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div style={{ zIndex: 999, position: "fixed" }}>
      <button
        className={`chatbot-toggler ${isOpen ? "open" : ""} `}
        onClick={handleChatToggle}
      >
        <i
          className={`fas fa-comment-dots text-white text-4xl  ${
            isOpen ? "hidden" : ""
          }`}
        ></i>
        <i
          className={`fas fa-times text-white text-4xl ${
            isOpen ? "" : "hidden"
          }`}
        ></i>
      </button>
      <div className={`chatbot ${isOpen ? "open" : ""}`}>
        <header className="chatbot-header">
          <h2>Chatbot</h2>
          <span className="material-symbols-rounded" onClick={handleChatToggle}>
            close
          </span>
        </header>
        <ul className="chatbox" ref={chatboxRef}>
          {messages.map((msg, index) => (
            <li key={index} className={`chat  ${msg.type}`}>
              {msg.type === "incoming" && (
                <i className="fas fa-robot text-2xl text-red-800"></i>
              )}
              {msg.type === "outgoing" && (
                <i className="fas fa-user text-2xl text-blue-800"></i>
              )}
              <p>{msg.content}</p>
            </li>
          ))}
        </ul>
        <div className="chat-input">
          <input
            className="border resize-none w-full h-10 p-3  border-gray-800 rounded-full"
            placeholder="Enter a message..."
            spellCheck="false"
            required
            value={userMessage}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            ref={chatInputRef}
          ></input>
          <i
            className="fas fa-paper-plane text-white cursor-pointer  p-2 rounded-full bg-red-800 "
            style={{ fontSize: "25px" }}
            onClick={handleSendMessage}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default CHATBOT;
