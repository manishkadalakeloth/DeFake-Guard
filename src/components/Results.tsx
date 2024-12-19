import React from 'react';
import { ShieldCheck, ShieldAlert } from 'lucide-react';

interface ResultsProps {
  isGenuine: boolean;
  confidence: number;
}

export function Results({ isGenuine, confidence }: ResultsProps) {
  const Icon = isGenuine ? ShieldCheck : ShieldAlert;
  const bgColor = isGenuine ? 'bg-green-50' : 'bg-red-50';
  const textColor = isGenuine ? 'text-green-700' : 'text-red-700';
  const borderColor = isGenuine ? 'border-green-200' : 'border-red-200';
  const iconColor = isGenuine ? 'text-green-500' : 'text-red-500';

  return (
    <div className={`rounded-lg border ${borderColor} ${bgColor} p-6`}>
      <div className="flex items-center justify-center space-x-4">
        <Icon className={`h-12 w-12 ${iconColor}`} />
        <div className="text-center">
          <h3 className={`text-2xl font-bold ${textColor}`}>
            {isGenuine ? 'Genuine Content' : 'Deepfake Detected'}
          </h3>
          <p className={`mt-1 text-lg ${textColor}`}>
            Confidence: {confidence}%
          </p>
        </div>
      </div>
    </div>
  );
}