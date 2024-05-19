import React from 'react';
import { AiFillHome, AiFillInfoCircle, AiFillMail, AiFillSetting } from "react-icons/ai";
import { FaHome, FaChartBar, FaLayerGroup, FaTasks, FaChartPie, FaUsers, FaLifeRing, FaCog } from 'react-icons/fa';
import { SiAffinity } from 'react-icons/si';

const Sidebar = () => {
  return (
    <div className="fixed h-screen w-16 flex flex-col bg-blue-900 text-white shadow-lg">
    <div className="flex items-center justify-center h-16">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO9HroYx7700NbNJnhC1iUnT9K6xaSO3qgznRBbz0YDg&s" alt="Archstore" className="rounded-full h-10 w-10"></img>
    </div>
    <div className="flex-1 flex flex-col justify-center space-y-5">
      <a href="#home" className="flex items-center justify-center ml-3 h-10 w-10 hover:bg-blue-700">
        <FaHome size="24" />
      </a>
      <a href="#analytics" className="flex items-center justify-center ml-3 h-10 w-10 hover:bg-blue-700">
        <FaChartBar size="24" />
      </a>
      <a href="#layers" className="flex items-center justify-center ml-3 h-10 w-10 hover:bg-blue-700">
        <FaLayerGroup size="24" />
      </a>
      <a href="#tasks" className="flex items-center justify-center ml-3 h-10 w-10 hover:bg-blue-700">
        <FaTasks size="24" />
      </a>
      <a href="#reports" className="flex items-center justify-center ml-3 h-10 w-10 hover:bg-blue-700">
        <FaChartPie size="24" />
      </a>
      <a href="#users" className="flex items-center justify-center ml-3 h-10 w-10 hover:bg-blue-700">
        <FaUsers size="24" />
      </a>
    </div>
    
    <div className="flex flex-col items-center space-y-5">
        <a href="#support" className="flex items-center justify-center h-10 w-10 hover:bg-blue-700">
          <FaLifeRing size="24" />
        </a>
        <a href="#settings" className="flex items-center justify-center h-10 w-10 hover:bg-blue-700">
          <FaCog size="24" />
        </a>
        <div className="flex items-center justify-center h-10">
          <img src="https://via.placeholder.com/32" alt="User Avatar" className="rounded-full" />
        </div>
      </div>
  </div>
  );
};

export default Sidebar;
