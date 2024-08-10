import React from 'react';

interface DetailsSectionProps {
  accountName: string;
  region: string;
  severityLevel: 'High' | 'Medium' | 'Low';
}

export function DetailsSection({ accountName, region, severityLevel }: DetailsSectionProps) {
  return (
    <div className="bg-gray-700 p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-2 text-white">Details:</h3>
      <div className="grid grid-cols-2 gap-2 text-sm">
        <div>
          <p className="font-semibold">Account:</p>
          <p className="text-gray-300">{accountName}</p>
        </div>
        <div>
          <p className="font-semibold">Region:</p>
          <p className="text-gray-300">{region}</p>
        </div>
        <div className="col-span-2">
          <p className="font-semibold">Severity:</p>
          <span className={`inline-block px-2 py-1 rounded ${
            severityLevel === 'High' ? 'bg-red-600' :
            severityLevel === 'Medium' ? 'bg-yellow-600' :
            'bg-green-600'
          } text-white`}>
            {severityLevel}
          </span>
        </div>
      </div>
    </div>
  );
}