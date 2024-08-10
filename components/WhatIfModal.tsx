import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogOverlay,
} from "@/components/ui/dialog";
import { getRandomImpactReport, ImpactReport, getPrompt, Prompt } from '@/utils/recommendations';
import { PromptSection } from './PromptSection';
import { AwsComponentInfo } from './AwsComponentInfo';
import { Recommendation } from './Recommendation';
import { ImpactSection } from './ImpactSection';

interface WhatIfModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WhatIfModal({ isOpen, onClose }: WhatIfModalProps) {
  const [impactReport, setImpactReport] = useState<ImpactReport>(getRandomImpactReport());
  const [promptIndex, setPromptIndex] = useState(0);
  const [currentPrompt, setCurrentPrompt] = useState<Prompt>(getPrompt(0));

  useEffect(() => {
    if (isOpen) {
      setImpactReport(getRandomImpactReport());
    }
  }, [isOpen]);

  const handlePrevPrompt = () => {
    const newIndex = (promptIndex - 1 + 3) % 3; // Assuming 3 prompts
    setPromptIndex(newIndex);
    setCurrentPrompt(getPrompt(newIndex));
  };

  const handleNextPrompt = () => {
    const newIndex = (promptIndex + 1) % 3; // Assuming 3 prompts
    setPromptIndex(newIndex);
    setCurrentPrompt(getPrompt(newIndex));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="bg-black/80" />
      <DialogContent className="md:max-w-[700px] bg-gray-800 text-white border border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">Impact Report</DialogTitle>
        </DialogHeader>
        <div className="mt-6 space-y-6">
          <PromptSection 
            prompt={currentPrompt.text}
            currentPrompt={promptIndex + 1}
            totalPrompts={3}
            onPrevPrompt={handlePrevPrompt}
            onNextPrompt={handleNextPrompt}
          />
          <div className="border-t border-gray-700 my-4"></div>
          <AwsComponentInfo 
            awsComponent={impactReport.awsComponent}
            accountName={impactReport.accountName}
            region={impactReport.region}
            severityLevel={impactReport.severityLevel}
          />
          <div className="border-t border-gray-700 my-4"></div>
          <Recommendation 
            text={impactReport.recommendation.text}
            category={impactReport.recommendation.category}
          />
          <div className="border-t border-gray-700 my-4"></div>
          <ImpactSection 
            score={impactReport.impactScore}
            explanation={impactReport.impactExplanation}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}