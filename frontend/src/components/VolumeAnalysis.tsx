import React from 'react';
import { BarChart2 } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface VolumeData {
  date: string;
  marketVolume: number;
  stockVolume: number;
}

interface VolumeAnalysisProps {
  data: VolumeData[];
}

export const VolumeAnalysis: React.FC<VolumeAnalysisProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center gap-2 mb-4">
        <BarChart2 className="w-5 h-5" />
        <h2 className="text-xl font-semibold">成交量分析</h2>
      </div>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="marketVolume"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
              name="大盘成交量"
            />
            <Area
              type="monotone"
              dataKey="stockVolume"
              stackId="2"
              stroke="#82ca9d"
              fill="#82ca9d"
              name="个股成交量"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};