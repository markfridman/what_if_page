import { useState } from 'react';
import WhatIfModal from '../components/WhatIfModal';

export default function WhatIf() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 text-center mx-auto">
      <h1 className="text-2xl font-bold mb-4">What-If</h1>
      <button 
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Open What-If Report
      </button>
      <WhatIfModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}