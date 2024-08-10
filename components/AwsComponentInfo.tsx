import React from 'react';
import { FaAws } from 'react-icons/fa';

interface AwsComponentInfoProps {
  awsComponent: string;
  accountName: string;
  region: string;
  severityLevel: string;
}

export function AwsComponentInfo({ awsComponent, accountName, region, severityLevel }: AwsComponentInfoProps) {
  return (
    <div className="rounded-lg">
      <div className="sm:max-w-[400px] flex mb-2">
        <div className='mr-2'><FaAws className="text-2xl text-blue-400" /></div>
        <div>
          <p className="text-sm text-gray-300">{awsComponent}</p>
        </div>
      </div>
      <div className="rounded-lg">
        <div className="grid grid-cols-3 gap-3 text-sm">
          <div>
            <p className="font-semibold">Account:</p>
            <p className="text-gray-300">{accountName}</p>
          </div>
          <div>
            <p className="font-semibold">Region:</p>
            <p className="text-gray-300">{region}</p>
          </div>
          <div className="col-span-1">
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
    </div>
  );
}