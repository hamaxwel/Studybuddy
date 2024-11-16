import React, { useState } from 'react';
import './LiveChatPage.css';

const LiveChatPage = () => {
  const [messages, setMessages] = useState([
    { sender: 'Parent', text: 'Hello! How can I track my child’s progress?' },
    { sender: 'Support', text: 'Hello! You can view the progress under the "Performance" section.' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const message = {
        sender: 'Parent',
        text: newMessage
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  return (
    <div className="live-chat-container">
      <div className="chat-header">
        <h2></h2>
      </div>
      <div className="chat-window">
        <div className="message-container">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender === 'Parent' ? 'parent-message' : 'support-message'}`}>
              <p><strong>{message.sender}:</strong> {message.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default LiveChatPage;
