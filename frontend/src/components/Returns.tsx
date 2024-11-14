import React from 'react';
import { TrendingUp, DollarSign, Percent, LineChart } from 'lucide-react';

interface ReturnsProps {
  dailyReturn: number;
  totalReturn: number;
  initialInvestment: number;
  currentValue: number;
  periodReturns: {
    fiveDay: { percentage: number; amount: number };
    tenDay: { percentage: number; amount: number };
    thirtyDay: { percentage: number; amount: number };
  };
}

export const Returns: React.FC<ReturnsProps> = ({ 
  dailyReturn, 
  totalReturn, 
  initialInvestment,
  currentValue,
  periodReturns 
}) => {
  const getReturnColor = (value: number) => {
    if (value > 0) return 'text-green-600';
    if (value < 0) return 'text-red-600';
    return 'text-gray-600';
  };

  const formatReturn = (value: number) => {
    const sign = value > 0 ? '+' : '';
    return `${sign}${value.toFixed(2)}%`;
  };

  const formatMoney = (value: number) => {
    return `¥${value.toLocaleString('zh-CN', { maximumFractionDigits: 2 })}`;
  };

  const totalProfitAmount = currentValue - initialInvestment;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <TrendingUp className="w-5 h-5" />
        收益分析
      </h2>
      
      <div className="grid grid-cols-3 gap-6">
        {/* Daily Returns */}
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <LineChart className="w-5 h-5 text-gray-700" />
              <h3 className="text-base font-medium text-gray-700">当日收益</h3>
            </div>
            <div className="space-y-4">
              <div>
                <span className="text-gray-500 text-sm">收益率</span>
                <div className={`text-2xl font-bold mt-1 ${getReturnColor(dailyReturn)}`}>
                  {formatReturn(dailyReturn)}
                </div>
              </div>
              <div className="pt-3 border-t border-gray-200">
                <span className="text-gray-500 text-sm">收益金额</span>
                <div className={`text-xl font-bold mt-1 ${getReturnColor(dailyReturn * initialInvestment / 100)}`}>
                  {formatMoney(dailyReturn * initialInvestment / 100)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Total Returns */}
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <DollarSign className="w-5 h-5 text-gray-700" />
              <h3 className="text-base font-medium text-gray-700">总收益</h3>
            </div>
            <div className="space-y-4">
              <div>
                <span className="text-gray-500 text-sm">收益率</span>
                <div className={`text-2xl font-bold mt-1 ${getReturnColor(totalReturn)}`}>
                  {formatReturn(totalReturn)}
                </div>
              </div>
              <div className="pt-3 border-t border-gray-200">
                <span className="text-gray-500 text-sm">收益金额</span>
                <div className={`text-xl font-bold mt-1 ${getReturnColor(totalProfitAmount)}`}>
                  {formatMoney(totalProfitAmount)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Period Returns */}
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <Percent className="w-5 h-5 text-gray-700" />
              <h3 className="text-base font-medium text-gray-700">区间收益</h3>
            </div>
            <div className="space-y-3">
              {Object.entries(periodReturns).map(([period, { percentage, amount }]) => (
                <div key={period} className="group">
                  <div className="flex justify-between items-baseline">
                    <span className="text-gray-500 text-sm">
                      {period === 'fiveDay' ? '5日' : period === 'tenDay' ? '10日' : '30日'}
                    </span>
                    <span className={`text-base font-semibold ${getReturnColor(percentage)}`}>
                      {formatReturn(percentage)}
                    </span>
                  </div>
                  <div className={`text-right text-sm ${getReturnColor(amount)}`}>
                    {formatMoney(amount)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Investment Overview */}
      <div className="grid grid-cols-2 gap-6 mt-6">
        <div className="bg-gray-50 rounded-xl p-5">
          <span className="text-gray-500 text-sm">初始投资</span>
          <div className="text-xl font-bold mt-1">{formatMoney(initialInvestment)}</div>
        </div>
        <div className="bg-gray-50 rounded-xl p-5">
          <span className="text-gray-500 text-sm">当前市值</span>
          <div className="text-xl font-bold mt-1">{formatMoney(currentValue)}</div>
        </div>
      </div>
    </div>
  );
};