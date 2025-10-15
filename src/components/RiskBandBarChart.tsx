import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { RISK_BAND_COLORS } from '../lib/types';

interface RiskBandBarChartProps {
  currentRiskBand: string;
  maxLoanAmount: number;
}

const RiskBandBarChart: React.FC<RiskBandBarChartProps> = ({ currentRiskBand, maxLoanAmount }) => {
  // Sample comparative data
  const data = [
    { name: 'Low-High', value: 500000, riskBand: 'Low Risk - High Need' },
    { name: 'Low-Low', value: 300000, riskBand: 'Low Risk - Low Need' },
    { name: 'Medium', value: 200000, riskBand: 'Medium Risk' },
    { name: 'High', value: 100000, riskBand: 'High Risk' },
    { name: 'Very High', value: 50000, riskBand: 'Very High Risk' },
  ];

  // Update current risk band with actual loan amount
  const chartData = data.map(item => 
    item.riskBand === currentRiskBand 
      ? { ...item, value: maxLoanAmount }
      : item
  );

  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Max Loan Amount by Risk Band</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip 
            formatter={(value: number) => `₹${value.toLocaleString('en-IN')}`}
          />
          <Bar dataKey="value" radius={[8, 8, 0, 0]}>
            {chartData.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={RISK_BAND_COLORS[entry.riskBand as keyof typeof RISK_BAND_COLORS] || '#6B7280'} 
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RiskBandBarChart;
