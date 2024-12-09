export interface AnalysisResult {
  isAI: boolean;
  confidence: number;
  perplexity: number;
  burstiness: number;
  sentenceAnalysis: SentenceAnalysis[];
}

export interface SentenceAnalysis {
  text: string;
  confidence: number;
  isAI: boolean;
}

export interface AnalysisStore {
  darkMode: boolean;
  toggleDarkMode: () => void;
  results: AnalysisResult | null;
  setResults: (results: AnalysisResult | null) => void;
  analyzing: boolean;
  setAnalyzing: (analyzing: boolean) => void;
}