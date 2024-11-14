import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface MarketSentimentProps {
  sentiment: number; // 0-100
  title: string;
}

export const MarketSentiment: React.FC<MarketSentimentProps> = ({ sentiment, title }) => {
  const getSentimentColor = () => {
    if (sentiment >= 70) return 'bg-green-500';
    if (sentiment <= 30) return 'bg-red-500';
    return 'bg-yellow-500';
  };

  const getSentimentIcon = () => {
    if (sentiment >= 50) {
      return <TrendingUp className="w-5 h-5 text-green-500" />;
    }
    return <TrendingDown className="w-5 h-5 text-red-500" />;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        {getSentimentIcon()}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className={`h-2.5 rounded-full ${getSentimentColor()}`}
          style={{ width: `${sentiment}%` }}
        ></div>
      </div>
      <p className="text-sm font-medium text-gray-900 mt-2">
        {sentiment}%
      </p>
    </div>
  );
};