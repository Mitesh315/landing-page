import React from 'react';
import CurrentMarketTrend from './CurrentMarketTrend';
import IndustryOpportunities from './IndustryOpportunities';
import TrendingIndustry from './TrendingIndustry';
import AdCampaignPerformance from './AdCampaignPerformance';

const DashboardContent = () => {
  return (
    <div className="p-6 flex-1 overflow-auto">
      <div className="flex justify-between items-center mb-6">
        <div className="text-lg font-semibold">Market Analysis</div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <CurrentMarketTrend />
        <IndustryOpportunities />
        <TrendingIndustry />
        <AdCampaignPerformance />
      </div>
    </div>
  );
};

export default DashboardContent;
