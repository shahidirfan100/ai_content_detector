import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from 'framer-motion';

interface CircularProgressProps {
  value: number;
  isAI: boolean;
}

export function CircularProgress({ value, isAI }: CircularProgressProps) {
  const color = isAI ? '#ef4444' : '#22c55e';

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, type: 'spring' }}
      className="w-48 h-48"
    >
      <CircularProgressbar
        value={value}
        text={`${value.toFixed(1)}%`}
        styles={buildStyles({
          pathColor: color,
          textColor: color,
          trailColor: '#e5e7eb',
          pathTransition: 'stroke-dashoffset 0.5s ease-in-out',
        })}
      />
    </motion.div>
  );
}