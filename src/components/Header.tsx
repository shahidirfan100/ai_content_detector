import React from 'react';
import { Moon, Sun, Zap } from 'lucide-react';
import { useAnalysisStore } from '../store/analysis';

export function Header() {
  const { darkMode, toggleDarkMode } = useAnalysisStore();

  return (
    <header className="w-full py-6 px-4 border-b dark:border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Zap className="w-8 h-8 text-blue-600" />
          <span className="text-xl font-bold">AI Content Detector</span>
        </div>
        
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          {darkMode ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>
      </div>
    </header>
  );
}