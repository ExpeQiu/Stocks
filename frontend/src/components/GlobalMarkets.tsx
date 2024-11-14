import React from 'react';
import { Globe, DollarSign, JapaneseYen, TrendingUp } from 'lucide-react';

interface MarketIndex {
  name: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
}

interface GlobalMarketsProps {
  indices: MarketIndex[];
}

export const GlobalMarkets: React.FC<GlobalMarketsProps> = ({ indices }) => {
  const getTrendColor = (trend: 'up' | 'down' | 'neutral') => {
    switch (trend) {
      case 'up':
        return 'text-green-600';
      case 'down':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const getIconForIndex = (name: string) => {
    switch (name) {
      case '美纳指数':
        return <DollarSign className="w-4 h-4" />;
      case '日经指数':
        return <JapaneseYen className="w-4 h-4" />;
      case '恒生指数':
        return <TrendingUp className="w-4 h-4" />;
      default:
        return <Globe className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Globe className="w-5 h-5" />
        全球市场指标
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {indices.map((index) => (
          <div key={index.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2">
              {getIconForIndex(index.name)}
              <span className="font-medium">{index.name}</span>
            </div>
            <div className="text-right">
              <div className="font-semibold">{index.value}</div>
              <div className={`text-sm ${getTrendColor(index.trend)}`}>
                {index.change}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};