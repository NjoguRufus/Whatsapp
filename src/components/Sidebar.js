import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h3>Your Chats</h3>
      </div>
      <div className="sidebar__chats">
        {/* List of chats */}
      </div>
    </div>
  );
}

export default Sidebar;
