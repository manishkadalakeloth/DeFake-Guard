import React, { useState } from 'react';
import { FileUpload } from './components/FileUpload';
import { ProgressBar } from './components/ProgressBar';
import { Results } from './components/Results';
import { Shield } from 'lucide-react';

function App() {
  const [analyzing, setAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<{ isGenuine: boolean; confidence: number } | null>(null);

  const simulateAnalysis = (file: File) => {
    setAnalyzing(true);
    setProgress(0);
    setResult(null);

    const duration = 3000; // 3 seconds
    const interval = 50; // Update every 50ms
    const steps = duration / interval;
    let currentStep = 0;

    const progressInterval = setInterval(() => {
      currentStep++;
      const newProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(progressInterval);
        setAnalyzing(false);
        // Simulate random result
        setResult({
          isGenuine: Math.random() > 0.5,
          confidence: Math.floor(Math.random() * 20) + 80, // 80-99%
        });
      }
    }, interval);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Shield className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Deepfake Detection Tool
          </h1>
          <p className="text-lg text-gray-600">
            Upload an image or video to analyze its authenticity using our advanced AI detection system
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <FileUpload onFileSelect={simulateAnalysis} />
        </div>

        {analyzing && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Analyzing Content
            </h2>
            <ProgressBar progress={progress} />
          </div>
        )}

        {result && (
          <div className="mb-8">
            <Results 
              isGenuine={result.isGenuine} 
              confidence={result.confidence} 
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;