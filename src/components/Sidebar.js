import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { MdHome, MdPerson, MdDashboard } from 'react-icons/md';

const Sidebar = () => {
  return (
    <div className="bg-gray-900 h-screen p-4 shadow-md text-white">
      <h2 className="text-2xl font-bold pl-4 mb-6">Menu</h2>
      <ul>
      <li className="mb-4 hover:bg-gray-300 hover:text-black cursor-pointer p-2 rounded transition duration-200">
          <Link to="/home" className="block p-2 rounded flex items-center"><MdHome/>Home</Link>
        </li>
      <li className="mb-4 hover:bg-gray-300 hover:text-black cursor-pointer p-2 rounded transition duration-200">
      <Link to="/dashboard" className="block p-2 rounded flex items-center"><MdDashboard/>Dashboard Count</Link>
        </li>
        <li className="mb-4 hover:bg-gray-300 hover:text-black cursor-pointer p-2 rounded transition duration-200">
          <Link to="/userlist" className="block p-2 rounded flex items-center"><MdPerson/>User List</Link>
        </li>
        <li className="mb-4 hover:bg-gray-300 hover:text-black cursor-pointer p-2 rounded transition duration-200">
          <Link to="/" className="block p-2 rounded flex items-center">
            <FiLogOut/>
            Log Out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
