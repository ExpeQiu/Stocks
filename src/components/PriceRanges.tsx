import React from 'react';
import { DataCard } from './DataCard';

interface PriceRangesProps {
  sevenDayHigh: number;
  sevenDayLow: number;
  thirtyDayHigh: number;
  thirtyDayLow: number;
}

export const PriceRanges: React.FC<PriceRangesProps> = ({
  sevenDayHigh,
  sevenDayLow,
  thirtyDayHigh,
  thirtyDayLow,
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <DataCard
        title="7日最高价格"
        value={`¥${sevenDayHigh.toFixed(2)}`}
        trend="up"
        className="bg-green-50"
      />
      <DataCard
        title="7日最低价格"
        value={`¥${sevenDayLow.toFixed(2)}`}
        trend="down"
        className="bg-red-50"
      />
      <DataCard
        title="30日最高价格"
        value={`¥${thirtyDayHigh.toFixed(2)}`}
        trend="up"
        className="bg-green-50"
      />
      <DataCard
        title="30日最低价格"
        value={`¥${thirtyDayLow.toFixed(2)}`}
        trend="down"
        className="bg-red-50"
      />
    </div>
  );
};