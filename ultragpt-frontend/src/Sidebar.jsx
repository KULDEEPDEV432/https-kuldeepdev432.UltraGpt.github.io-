import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-6">ultraGpt</h2>
      <nav className="flex flex-col space-y-3">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/chat" className="hover:text-blue-400">Chat</Link>
        <Link to="/settings" className="hover:text-blue-400">Settings</Link>
        <Link to="/about" className="hover:text-blue-400">About</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
