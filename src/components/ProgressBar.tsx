import React from 'react';

interface ProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
      <div
        className="h-full bg-blue-500 transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
      >
        <div className="h-full w-full animate-pulse bg-blue-400/50" />
      </div>
    </div>
  );
}