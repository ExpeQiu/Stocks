import { StockData } from '../types/stock';

const API_BASE_URL = 'http://localhost:8000/api';

export const fetchStockData = async (code: string): Promise<StockData> => {
  const response = await fetch(`${API_BASE_URL}/stocks/${code}`);
  if (!response.ok) {
    throw new Error('Failed to fetch stock data');
  }
  return response.json();
};

export const fetchMarketData = async () => {
  const response = await fetch(`${API_BASE_URL}/markets`);
  if (!response.ok) {
    throw new Error('Failed to fetch market data');
  }
  return response.json();
}; 