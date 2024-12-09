import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculatePerplexity(text: string): number {
  // Simplified perplexity calculation for demo
  return Math.random() * 100;
}

export function calculateBurstiness(text: string): number {
  // Simplified burstiness calculation for demo
  return Math.random() * 100;
}

export function getConfidenceColor(confidence: number): string {
  if (confidence > 80) return 'text-green-500';
  if (confidence > 40) return 'text-yellow-500';
  return 'text-red-500';
}