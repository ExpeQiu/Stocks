import React, { useState } from 'react';
import { 
  ComposedChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Bar,
  Brush
} from 'recharts';
import { format } from 'date-fns';

interface StockData {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

interface StockChartProps {
  data: StockData[];
}

export const StockChart: React.FC<StockChartProps> = ({ data }) => {
  const [brushStartIndex, setBrushStartIndex] = useState<number>(0);
  const [brushEndIndex, setBrushEndIndex] = useState<number>(data.length - 1);

  const CustomizedCandlestick = (props: any) => {
    const { x, y, width, open, close, low, high } = props;
    const fill = open > close ? '#ef4444' : '#22c55e';
    const halfWidth = width / 2;

    return (
      <g>
        <line
          x1={x + halfWidth}
          y1={y + Math.min(open, close)}
          x2={x + halfWidth}
          y2={y + low}
          stroke={fill}
          strokeWidth={1}
        />
        <line
          x1={x + halfWidth}
          y1={y + high}
          x2={x + halfWidth}
          y2={y + Math.max(open, close)}
          stroke={fill}
          strokeWidth={1}
        />
        <rect
          x={x}
          y={y + Math.min(open, close)}
          width={width}
          height={Math.abs(open - close)}
          fill={fill}
          stroke={fill}
        />
      </g>
    );
  };

  const handleBrushChange = (brushData: any) => {
    if (brushData.startIndex !== undefined && brushData.endIndex !== undefined) {
      setBrushStartIndex(brushData.startIndex);
      setBrushEndIndex(brushData.endIndex);
    }
  };

  return (
    <div className="h-[500px] w-full bg-white rounded-lg shadow-lg p-4">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="date" 
            tickFormatter={(date) => format(new Date(date), 'MM/dd')}
          />
          <YAxis yAxisId="price" domain={['auto', 'auto']} />
          <YAxis yAxisId="volume" orientation="right" />
          <Tooltip 
            labelFormatter={(date) => format(new Date(date), 'yyyy/MM/dd')}
            formatter={(value: number) => [`¥${value.toFixed(2)}`, 'Price']}
          />
          <Bar
            dataKey="volume"
            yAxisId="volume"
            fill="#8884d8"
            opacity={0.3}
            barSize={20}
          />
          <Area
            type="monotone"
            dataKey="close"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.1}
            yAxisId="price"
          />
          {data.map((entry, index) => (
            <CustomizedCandlestick
              key={`candle-${index}`}
              x={index * 30}
              open={entry.open}
              close={entry.close}
              high={entry.high}
              low={entry.low}
              width={20}
            />
          ))}
          <Brush
            dataKey="date"
            height={30}
            stroke="#8884d8"
            onChange={handleBrushChange}
            tickFormatter={(date) => format(new Date(date), 'MM/dd')}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};