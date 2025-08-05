import React from 'react';

const MessageItem = ({ sender, message, isUser }) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} my-2`}>
      <div
        className={`max-w-[80%] px-4 py-2 rounded-lg ${
          isUser
            ? 'bg-blue-600 text-white rounded-br-none'
            : 'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white rounded-bl-none'
        }`}
      >
        <p className="text-sm font-semibold">{sender}</p>
        <p className="text-base">{message}</p>
      </div>
    </div>
  );
};

export default MessageItem;
