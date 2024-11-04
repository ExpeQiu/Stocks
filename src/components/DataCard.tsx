import React from 'react';

interface DataCardProps {
  title: string;
  value: string | number;
  trend?: 'up' | 'down' | 'neutral';
  className?: string;
}

export const DataCard: React.FC<DataCardProps> = ({ title, value, trend, className = '' }) => {
  const getTrendColor = () => {
    switch (trend) {
      case 'up':
        return 'text-green-600';
      case 'down':
        return 'text-red-600';
      default:
        return 'text-gray-900';
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-md p-4 ${className}`}>
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className={`text-lg font-semibold mt-1 ${getTrendColor()}`}>
        {value}
      </p>
    </div>
  );
};