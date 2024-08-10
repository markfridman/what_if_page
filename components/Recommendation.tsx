import React from 'react';

interface RecommendationProps {
  text: string;
  category: string;
}

export function Recommendation({ text, category }: RecommendationProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2 text-white">Recommendation:</h3>
      <p className="text-sm text-gray-300">{text}</p>
      <span className="inline-block mt-2 px-2 py-1 bg-blue-800 text-blue-200 text-xs font-semibold rounded">
        {category}
      </span>
    </div>
  );
}