import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#22c55e', '#3b82f6', '#eab308', '#ef4444', '#8b5cf6'];

interface GaugeChartProps {
  score: number;
}

export default function GaugeChart({ score }: GaugeChartProps) {
  const data = [
    { name: 'Score', value: score },
    { name: 'Remaining', value: 5 - score },
  ];

  return (
    <div className="h-48 flex flex-row">
      <div className="w-32 h-58">
        <ResponsiveContainer width="100%" height="50%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="100%"
              startAngle={180}
              endAngle={0}
              innerRadius="60%"
              outerRadius="80%"
              paddingAngle={0}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index === 0 ? COLORS[score - 1] : '#374151'} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-10">
        <span className="text-2xl font-bold text-white">{score}</span>
        <p className="text-sm text-gray-300 mt-1">Overall Score</p>
      </div>
    </div>
  );
}