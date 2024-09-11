import React, { useState, useEffect, useRef } from 'react';
import './ChatWindow.css';

function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const chatEndRef = useRef(null);

  // Scroll to bottom when a new message is sent
  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();
    const newMessage = event.target.elements.message.value;
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages([...messages, { text: newMessage, sender: 'You', time: currentTime }]);
    event.target.reset();
  };

  return (
    <div className="chatWindow">
      <div className="chatWindow__header">
        <div className="chatWindow__headerInfo">
          <h3>John Doe</h3>
          <p>Online</p>
        </div>
        <div className="chatWindow__headerIcons">
          <i className="fas fa-search"></i>
          <i className="fas fa-ellipsis-v"></i>
        </div>
      </div>
      
      <div className="chatWindow__messages">
        {messages.map((message, index) => (
          <div key={index} className={`chatWindow__message ${message.sender === 'You' ? 'chatWindow__message--sent' : ''}`}>
            <p><strong>{message.sender}:</strong> {message.text}</p>
            <span className="chatWindow__timestamp">{message.time}</span>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <form onSubmit={sendMessage} className="chatWindow__form">
        <input type="text" name="message" placeholder="Type a message" autoFocus />
        <button type="submit"><i className="fas fa-paper-plane"></i></button>
      </form>
    </div>
  );
}

export default ChatWindow;
