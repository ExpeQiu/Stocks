import { useState, useEffect } from 'react';
import { StockData } from '../types/stock';
import { fetchStockData } from '../services/api';

export const useStockData = (stockCode: string) => {
  const [data, setData] = useState<StockData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const stockData = await fetchStockData(stockCode);
        setData(stockData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch stock data');
      } finally {
        setLoading(false);
      }
    };

    if (stockCode) {
      loadData();
    }
  }, [stockCode]);

  return { data, loading, error };
}; 