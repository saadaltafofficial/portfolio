'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TerminalOutputProps {
  children: React.ReactNode;
}

const TerminalOutput: React.FC<TerminalOutputProps> = ({ children }) => {
  if (!children) return null;
  
  return (
    <motion.div
      className="mt-2 ml-3"
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default TerminalOutput;
