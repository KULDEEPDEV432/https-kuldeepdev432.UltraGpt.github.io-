import React from 'react';

const MessageItem = ({ message, isUser }) => {
  return (
    <div className={`message-item ${isUser ? 'user-message' : 'ai-message'}`}>
      <div className="message-bubble">
        {message}
      </div>
    </div>
  );
};

export default MessageItem;
