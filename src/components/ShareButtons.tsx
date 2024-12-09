import React from 'react';
import {
  TwitterShareButton,
  LinkedinShareButton,
  TwitterIcon,
  LinkedinIcon,
} from 'react-share';
import { motion } from 'framer-motion';

interface ShareButtonsProps {
  url: string;
  title: string;
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
  return (
    <motion.div 
      className="flex space-x-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <LinkedinShareButton url={url} title={title}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </motion.div>
  );
}