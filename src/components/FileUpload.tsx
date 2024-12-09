import React from 'react';
import { Upload } from 'lucide-react';

export function FileUpload() {
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    // Handle file drop
  };

  return (
    <div
      className="w-full max-w-3xl mx-auto mt-8 p-8 border-2 border-dashed rounded-lg text-center"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
      <p className="text-lg mb-2">Got a file? Just drop it right here!</p>
      <p className="text-sm text-gray-500 mb-4">We play nice with .txt, .doc, .docx, and PDF files</p>
      <input
        type="file"
        className="hidden"
        accept=".txt,.doc,.docx,.pdf"
        id="file-upload"
      />
      <label
        htmlFor="file-upload"
        className="px-6 py-2 bg-gray-100 text-gray-800 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors"
      >
        Browse Files
      </label>
    </div>
  );
}