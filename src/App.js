import React from 'react';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import './App.css';
import './index.css';

function App() {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <ChatWindow />
    </div>
  );
}

export default App;
