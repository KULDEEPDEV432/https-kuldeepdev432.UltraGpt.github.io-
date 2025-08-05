import React from 'react';

const ChatHeader = () => {
  return (
    <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm">
      <h1 className="text-lg font-semibold text-gray-900 dark:text-white">ultraGpt</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400">Your personal AI assistant</p>
    </div>
  );
};

export default ChatHeader;
