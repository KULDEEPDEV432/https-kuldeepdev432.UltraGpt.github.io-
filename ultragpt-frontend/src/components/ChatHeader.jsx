import React from "react";

const ChatHeader = ({ title }) => {
  return (
    <div className="chat-header border-b px-4 py-2 flex items-center justify-between">
      <h2 className="text-lg font-semibold">{title || "UltraGPT Chat"}</h2>
      <span className="text-xs text-gray-500 dark:text-gray-400">Powered by ultraGpt</span>
    </div>
  );
};

export default ChatHeader;
