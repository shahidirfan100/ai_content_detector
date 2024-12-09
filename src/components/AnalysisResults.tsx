import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, XCircle, Copy } from 'lucide-react';
import { useAnalysisStore } from '../store/analysis';
import { getConfidenceColor } from '../lib/utils';
import { CircularProgress } from './CircularProgress';
import { ShareButtons } from './ShareButtons';
import { ExportButton } from './ExportButton';

export function AnalysisResults() {
  const { results } = useAnalysisStore();

  if (!results) return null;

  const confidenceColor = getConfidenceColor(results.confidence);
  const ConfidenceIcon = results.confidence > 80 
    ? CheckCircle 
    : results.confidence > 40 
    ? AlertTriangle 
    : XCircle;

  const handleCopy = () => {
    const text = `AI Content Analysis Results:
Confidence: ${results.confidence.toFixed(1)}%
Perplexity: ${results.perplexity.toFixed(1)}
Burstiness: ${results.burstiness.toFixed(1)}`;
    navigator.clipboard.writeText(text);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-3xl mx-auto mt-8 space-y-8"
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Analysis Results
          </h2>
          <ConfidenceIcon className={`w-8 h-8 ${confidenceColor}`} />
        </div>

        <div className="flex flex-col items-center mb-8">
          <CircularProgress value={results.confidence} isAI={results.isAI} />
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={`text-2xl font-bold mt-4 ${confidenceColor}`}
          >
            {results.isAI ? 'AI Generated' : 'Human Written'}
          </motion.h3>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl shadow-sm"
          >
            <div className="text-sm text-gray-500 dark:text-gray-400">Confidence</div>
            <div className={`text-2xl font-bold ${confidenceColor}`}>
              {results.confidence.toFixed(1)}%
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl shadow-sm"
          >
            <div className="text-sm text-gray-500 dark:text-gray-400">Perplexity</div>
            <div className="text-2xl font-bold">{results.perplexity.toFixed(1)}</div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl shadow-sm"
          >
            <div className="text-sm text-gray-500 dark:text-gray-400">Burstiness</div>
            <div className="text-2xl font-bold">{results.burstiness.toFixed(1)}</div>
          </motion.div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Sentence Analysis</h3>
          <div className="flex space-x-4">
            <button
              onClick={handleCopy}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <Copy className="w-4 h-4" />
              <span>Copy Results</span>
            </button>
            <ExportButton results={results} />
          </div>
        </div>

        <div className="space-y-4 mb-8">
          {results.sentenceAnalysis.map((sentence, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-4 rounded-lg ${
                sentence.isAI 
                  ? 'bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20' 
                  : 'bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20'
              }`}
            >
              <p className="text-sm mb-2">{sentence.text}</p>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Confidence: {sentence.confidence.toFixed(1)}%</span>
                <span>{sentence.isAI ? 'AI Generated' : 'Human Written'}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center border-t pt-6">
          <ShareButtons 
            url={window.location.href} 
            title={`AI Content Analysis: ${results.isAI ? 'AI Generated' : 'Human Written'} (${results.confidence.toFixed(1)}% confidence)`} 
          />
        </div>
      </div>
    </motion.div>
  );
}