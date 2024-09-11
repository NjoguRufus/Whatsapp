import React from 'react';

function Sidebar() {
  return (
    <div className="w-1/4 h-screen bg-gray-100 border-r border-gray-300 flex flex-col">
      {/* Sidebar Header */}
      <div className="flex justify-between items-center p-4 bg-gray-200 border-b border-gray-300">
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex space-x-4 text-gray-600">
          <i className="fas fa-comment-alt"></i>
          <i className="fas fa-ellipsis-v"></i>
        </div>
      </div>

      {/* Search Bar */}
      <div className="p-4">
        <div className="flex items-center bg-gray-200 rounded-full px-4 py-2">
          <i className="fas fa-search text-gray-600"></i>
          <input
            type="text"
            placeholder="Search or start new chat"
            className="flex-1 ml-4 bg-transparent outline-none"
          />
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 hover:bg-gray-200 cursor-pointer flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/40"
            alt="Chat Avatar"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1">
            <h4 className="text-lg font-semibold">John Doe</h4>
            <p className="text-sm text-gray-600">Hello! How are you?</p>
          </div>
          <p className="text-xs text-gray-500">11:30 AM</p>
        </div>

        {/* Add more chats below */}
        <div className="p-4 hover:bg-gray-200 cursor-pointer flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/40"
            alt="Chat Avatar"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1">
            <h4 className="text-lg font-semibold">Jane Smith</h4>
            <p className="text-sm text-gray-600">Let's catch up later.</p>
          </div>
          <p className="text-xs text-gray-500">10:00 AM</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
