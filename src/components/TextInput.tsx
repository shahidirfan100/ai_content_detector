import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { useAnalysisStore } from '../store/analysis';
import { calculatePerplexity, calculateBurstiness } from '../lib/utils';

export function TextInput() {
  const [text, setText] = useState('');
  const { setAnalyzing, setResults } = useAnalysisStore();

  const handleAnalyze = async () => {
    if (text.length < 100) {
      alert("Hey there! We'll need a bit more text to give you accurate results. Try adding at least 100 characters!");
      return;
    }

    setAnalyzing(true);
    
    // Simulated analysis - replace with actual API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const confidence = Math.random() * 100;
    const perplexity = calculatePerplexity(text);
    const burstiness = calculateBurstiness(text);
    
    setResults({
      isAI: confidence > 60,
      confidence,
      perplexity,
      burstiness,
      sentenceAnalysis: text.split('.').map(sentence => ({
        text: sentence.trim(),
        confidence: Math.random() * 100,
        isAI: Math.random() > 0.5
      }))
    });
    
    setAnalyzing(false);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      <div className="relative">
        <textarea
          className="w-full h-64 p-4 border rounded-lg resize-none bg-white dark:bg-gray-800 dark:text-white"
          placeholder="Just paste your text here - the more the merrier! We can handle up to 5000 characters."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="absolute bottom-4 right-4 text-sm text-gray-500">
          {text.length} characters - {text.length >= 5000 ? "that's plenty!" : "keep going!"}
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center text-sm text-gray-500">
          <AlertCircle className="w-4 h-4 mr-2" />
          <span>Don't worry - your text stays private and secure</span>
        </div>
        <button
          onClick={handleAnalyze}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          disabled={text.length < 100}
        >
          {text.length < 100 ? "Need a bit more text..." : "Let's Analyze!"}
        </button>
      </div>
    </div>
  );
}