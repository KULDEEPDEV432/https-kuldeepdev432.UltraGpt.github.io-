import React from 'react';

const Sidebar = ({ conversations, onSelect, onNewChat }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>ultraGPT</h2>
        <button onClick={onNewChat}>+ New Chat</button>
      </div>
      <ul className="conversation-list">
        {conversations.map((conv, index) => (
          <li key={index} onClick={() => onSelect(conv)}>
            {conv.title || `Chat ${index + 1}`}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
