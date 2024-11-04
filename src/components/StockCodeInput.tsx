import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface StockCodeInputProps {
  onSearch: (code: string) => void;
}

export const StockCodeInput: React.FC<StockCodeInputProps> = ({ onSearch }) => {
  const [stockCode, setStockCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (stockCode.trim()) {
      onSearch(stockCode.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2">
      <div className="relative">
        <input
          type="text"
          value={stockCode}
          onChange={(e) => setStockCode(e.target.value)}
          placeholder="输入股票代码"
          className="pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>
      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
        实时更新
      </span>
    </form>
  );
};