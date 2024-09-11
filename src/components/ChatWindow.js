import React, { useState, useEffect, useRef } from 'react';

function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const chatEndRef = useRef(null);

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
    <div className="flex-1 h-screen flex flex-col">
      <div className="flex-1 p-4 overflow-y-auto flex flex-col justify-end space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 p-2 max-w-xs rounded-lg ${message.sender === 'You' ? 'ml-auto bg-green-100 text-right' : 'bg-gray-200'}`}
          >
            <p><strong>{message.sender}:</strong> {message.text}</p>
            <p className="text-xs text-gray-500">{message.time}</p>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <form onSubmit={sendMessage} className="flex items-center p-4 border-t border-gray-300 bg-gray-100">
        <input
          type="text"
          name="message"
          placeholder="Type a message"
          className="flex-1 p-2 rounded-full bg-gray-200 focus:outline-none"
          autoFocus
        />
        <button type="submit" className="ml-4 p-2 rounded-full bg-green-500 text-white hover:bg-green-600">
          <i className="fas fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );
}

export default ChatWindow;
