import React from 'react';

const Message = ({ sender, text }) => {
  const isUser = sender === 'user';

  return (
    <div className={`my-2 flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-xs rounded-xl px-4 py-2 text-sm shadow ${
          isUser
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100'
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default Message;
