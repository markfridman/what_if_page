import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface PromptSectionProps {
  prompt: string;
  currentPrompt: number;
  totalPrompts: number;
  onPrevPrompt: () => void;
  onNextPrompt: () => void;
}

export function PromptSection({ 
  prompt, 
  currentPrompt, 
  totalPrompts, 
  onPrevPrompt, 
  onNextPrompt 
}: PromptSectionProps) {
  return (
    <div className="bg-gray-700 p-4 rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-white">Prompt {currentPrompt}/{totalPrompts}</h3>
        <div className="flex items-center space-x-2">
          <button onClick={onPrevPrompt} className="text-gray-300 hover:text-white">
            <FaChevronLeft />
          </button>
          <button onClick={onNextPrompt} className="text-gray-300 hover:text-white">
            <FaChevronRight />
          </button>
        </div>
      </div>
      <p className="text-sm text-gray-300">{prompt}</p>
    </div>
  );
}