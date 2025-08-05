import React from 'react';

const ChatBox = ({ messages }) => {
  return (
    <div className="flex flex-col space-y-2 p-4 overflow-y-auto h-full">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`p-3 rounded-lg max-w-[80%] ${
            msg.sender === 'user'
              ? 'bg-blue-500 text-white self-end'
              : 'bg-gray-300 text-black self-start'
          }`}
        >
          {msg.text}
        </div>
      ))}
    </div>
  );
};

export default ChatBox;
