import React from 'react';
import { FaSearch, FaCog, FaFileExport } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <div className="flex space-x-4">
        <a><FaSearch className="text-gray-600 mt-1 mr-2" /></a>
        <a className="flex items-center justify-center"><FaCog className="text-gray-600 mt-1 mr-2" />Customize</a>
        <a className="flex items-center justify-center"><FaFileExport className="text-gray-600 mt-1 mr-2" />Export</a>
      </div>
    </div>
  );
};

export default Navbar;
