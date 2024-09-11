import React from 'react';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <ChatWindow />
      </div>
    </div>
  );
}

export default App;
