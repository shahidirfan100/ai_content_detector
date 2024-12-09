import { create } from 'zustand';
import { AnalysisStore } from '../types';

export const useAnalysisStore = create<AnalysisStore>((set) => ({
  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  results: null,
  setResults: (results) => set({ results }),
  analyzing: false,
  setAnalyzing: (analyzing) => set({ analyzing }),
}));