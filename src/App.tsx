import React from 'react';
import { Header } from './components/Header';
import { TextInput } from './components/TextInput';
import { FileUpload } from './components/FileUpload';
import { AnalysisResults } from './components/AnalysisResults';
import { useAnalysisStore } from './store/analysis';

function App() {
  const { darkMode, analyzing } = useAnalysisStore();

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Let's Spot AI Content Together
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Ever wondered if what you're reading was written by AI? We've got you covered! 
              Drop your text below, and our smart detection system will work its magic to 
              give you the real story. It's like having a truth-detector in your pocket!
            </p>
          </div>

          {analyzing && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                <p className="mt-4 text-center">Hold tight! We're analyzing your content...</p>
              </div>
            </div>
          )}

          <div className="space-y-8">
            <TextInput />
            <div className="text-center text-gray-500">or if you prefer...</div>
            <FileUpload />
            <AnalysisResults />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;