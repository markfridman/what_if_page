import React from 'react';
import GaugeChart from './GaugeChart';

interface ImpactSectionProps {
  score: number;
  explanation: string;
}

export function ImpactSection({ score, explanation }: ImpactSectionProps) {
  return (
    <div className="space-y-6">
      <div className="h-20 md:h-20">
        <GaugeChart score={score} />
      </div>
      <div className="p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2 text-white">Impact Explanation:</h3>
        <p className="text-sm text-gray-300">{explanation}</p>
      </div>
    </div>
  );
}