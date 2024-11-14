import { useState } from 'react';
import { StockCodeInput } from './components/StockCodeInput';
import { StockChart } from './components/StockChart';
import { GlobalMarkets } from './components/GlobalMarkets';
import { VolumeAnalysis } from './components/VolumeAnalysis';
import { PriceRanges } from './components/PriceRanges';
import { Returns } from './components/Returns';
import { useStockData } from './hooks/useStockData';
import { formatPrice, formatPercent } from './utils/formatters';

function App() {
  const [stockCode, setStockCode] = useState('XXXXX');

  const handleStockSearch = (code: string) => {
    setStockCode(code);
    // Here you would typically fetch new data for the selected stock
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">股票分析仪表盘</h1>
            <StockCodeInput onSearch={handleStockSearch} />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6">
          {/* Stock Chart Section */}
          <section>
            <StockChart data={mockStockData} />
          </section>

          {/* Returns Section */}
          <Returns 
            dailyReturn={2.15}
            totalReturn={15.8}
            initialInvestment={100000}
            currentValue={115800}
            periodReturns={{
              fiveDay: { percentage: 4.2, amount: 4200 },
              tenDay: { percentage: 7.8, amount: 7800 },
              thirtyDay: { percentage: 12.5, amount: 12500 }
            }}
          />

          {/* Current Price Information */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <DataCard 
              title="昨日收盘价" 
              value="¥274.30" 
              className="bg-gray-50"
            />
            <DataCard 
              title="今日开盘价" 
              value="¥276.50" 
              trend="up"
            />
            <DataCard 
              title="当前价格" 
              value="¥282.30" 
              trend="up"
            />
            <DataCard 
              title="成交量" 
              value="1,234,567" 
              className="bg-blue-50"
            />
          </section>

          {/* Daily Price Range */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <DataCard 
              title="今日最高价" 
              value="¥285.60" 
              trend="up"
              className="bg-green-50"
            />
            <DataCard 
              title="今日最低价" 
              value="¥275.20" 
              trend="down"
              className="bg-red-50"
            />
            <DataCard 
              title="振幅" 
              value="3.78%" 
              className="bg-blue-50"
            />
            <DataCard 
              title="市盈率(TTM)" 
              value="22.45" 
              className="bg-purple-50"
            />
          </section>

          {/* Price Ranges */}
          <PriceRanges
            sevenDayHigh={295.20}
            sevenDayLow={274.80}
            thirtyDayHigh={298.50}
            thirtyDayLow={270.30}
          />

          {/* Volume Analysis */}
          <VolumeAnalysis data={mockVolumeData} />

          {/* Market Analysis Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Column - Technical Indicators */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <LineChart className="w-5 h-5" />
                技术指标
              </h2>
              <div className="grid gap-4">
                <DataCard title="MA5" value="279.50" trend="up" />
                <DataCard title="MA10" value="275.30" trend="up" />
                <DataCard title="MA30" value="268.80" trend="up" />
              </div>
            </section>

            {/* Middle Column - Volume Analysis */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <BarChart className="w-5 h-5" />
                资金流向
              </h2>
              <div className="grid gap-4">
                <DataCard title="主力净流入" value="¥12.5M" trend="up" />
                <DataCard title="散户净流入" value="-¥2.3M" trend="down" />
                <DataCard title="主力持仓成本" value="¥268.50" className="bg-purple-50" />
              </div>
            </section>

            {/* Right Column - Market Sentiment */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Activity className="w-5 h-5" />
                市场情绪
              </h2>
              <div className="grid gap-4">
                <MarketSentiment sentiment={75} title="技术指标情绪" />
                <MarketSentiment sentiment={65} title="市场情绪指数" />
                <DataCard title="累计换手率" value="15.8%" className="bg-blue-50" />
              </div>
            </section>
          </div>

          {/* Global Markets */}
          <GlobalMarkets indices={mockGlobalIndices} />
        </div>
      </main>
    </div>
  );
}

export default App;