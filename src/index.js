import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Ensure Tailwind is applied globally
import ChatWindow from './ChatWindow';

ReactDOM.render(
  <React.StrictMode>
    <ChatWindow />
  </React.StrictMode>,
  document.getElementById('root')
);
