import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts';

interface GaugeChartProps {
  score: number; // 0-100
}

const GaugeChart: React.FC<GaugeChartProps> = ({ score }) => {
  const data = [
    {
      name: 'Score',
      value: score,
      fill: score >= 70 ? '#16A34A' : score >= 50 ? '#FACC15' : '#DC2626',
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <ResponsiveContainer width="100%" height={200}>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="60%"
          outerRadius="90%"
          barSize={20}
          data={data}
          startAngle={180}
          endAngle={0}
        >
          <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
          <RadialBar
            background
            dataKey="value"
            cornerRadius={10}
            fill={data[0].fill}
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="text-center -mt-8">
        <p className="text-4xl font-bold text-gray-900">{score}</p>
        <p className="text-sm text-gray-600">Composite Score</p>
      </div>
    </div>
  );
};

export default GaugeChart;
