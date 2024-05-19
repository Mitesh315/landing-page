import React from 'react';
import DashboardContent from './components/DashboardContent';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-16">
        <Navbar />
        <DashboardContent />
      </div>
    </div>
  );
};

export default App;
