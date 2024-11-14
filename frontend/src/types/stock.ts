export interface StockData {
  code: string;
  name: string;
  currentPrice: number;
  changePercent: number;
  volume: number;
  high: number;
  low: number;
  open: number;
  close: number;
  date: string;
}

export interface MarketData {
  name: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
} 