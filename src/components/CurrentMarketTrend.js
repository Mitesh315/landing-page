import React from 'react';

const CurrentMarketTrend = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold">Current Market Trend</h2>
        <div className="flex space-x-2">
          <button className="text-gray-700">12 months</button>
          <button className="text-gray-700">30 days</button>
          <button className="text-gray-700">7 days</button>
        </div>
      </div>
      <div className="border-b mb-4"></div>
      <div className="h-48">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0kAv6LB0U-aN-lnkQt1Bo5mXQmT6MvS1Qq6lGTJscpN0qXWCT"></img>
      </div>
      <div className="text-sm text-gray-600 mt-4">
        Your customer market is increasing! Set up Ad Campaign to reach your customers.
      </div>
    </div>
  );
};

export default CurrentMarketTrend;
