import React, { useState } from 'react';
import './ChatWindow.css';

function ChatWindow() {
  const [messages, setMessages] = useState([]);

  const sendMessage = (event) => {
    event.preventDefault();
    const newMessage = event.target.elements.message.value;
    setMessages([...messages, { text: newMessage, sender: 'You' }]);
    event.target.reset();
  };

  return (
    <div className="chatWindow">
      <div className="chatWindow__messages">
        {messages.map((message, index) => (
          <div key={index} className="chatWindow__message">
            <p><strong>{message.sender}:</strong> {message.text}</p>
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input type="text" name="message" placeholder="Type a message" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatWindow;
