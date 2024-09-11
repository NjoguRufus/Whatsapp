import React from 'react';
import './Sidebar.css';

function Sidebar() {
  const chats = [
    { name: 'John Doe', lastMessage: 'Hey there!', time: '11:30 AM' },
    { name: 'Jane Smith', lastMessage: 'See you soon!', time: '10:45 AM' },
    { name: 'Group Chat', lastMessage: 'Let’s meet!', time: 'Yesterday' },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h3>Your Chats</h3>
      </div>
      <div className="sidebar__chats">
        {chats.map((chat, index) => (
          <div key={index} className="sidebar__chat">
            <div className="sidebar__chatInfo">
              <h4>{chat.name}</h4>
              <p>{chat.lastMessage}</p>
            </div>
            <span>{chat.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
