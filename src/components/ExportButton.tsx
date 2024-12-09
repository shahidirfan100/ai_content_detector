import React from 'react';
import { Download } from 'lucide-react';
import { jsPDF } from 'jspdf';
import { AnalysisResult } from '../types';

interface ExportButtonProps {
  results: AnalysisResult;
}

export function ExportButton({ results }: ExportButtonProps) {
  const handleExport = () => {
    const doc = new jsPDF();
    
    doc.setFontSize(20);
    doc.text('AI Content Analysis Report', 20, 20);
    
    doc.setFontSize(12);
    doc.text(`Confidence Score: ${results.confidence.toFixed(1)}%`, 20, 40);
    doc.text(`Perplexity: ${results.perplexity.toFixed(1)}`, 20, 50);
    doc.text(`Burstiness: ${results.burstiness.toFixed(1)}`, 20, 60);
    
    doc.text('Sentence Analysis:', 20, 80);
    let yPos = 90;
    results.sentenceAnalysis.forEach((sentence) => {
      doc.text(`• ${sentence.text}`, 20, yPos);
      doc.text(`  (${sentence.isAI ? 'AI' : 'Human'}, ${sentence.confidence.toFixed(1)}%)`, 30, yPos + 5);
      yPos += 15;
    });
    
    doc.save('ai-analysis-report.pdf');
  };

  return (
    <button
      onClick={handleExport}
      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
    >
      <Download className="w-4 h-4" />
      <span>Export PDF</span>
    </button>
  );
}