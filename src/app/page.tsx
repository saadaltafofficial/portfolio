'use client';

import { useState } from 'react';
import Terminal from '@/components/Terminal';
import GUIPortfolio from '@/components/GUIPortfolio';
import ViewToggle from '@/components/ViewToggle';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [isTerminalView, setIsTerminalView] = useState(true);

  const toggleView = () => {
    setIsTerminalView(!isTerminalView);
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4 md:p-8">
      <div className="toggle-button-container mb-4">
        <ViewToggle isTerminalView={isTerminalView} toggleView={toggleView} />
      </div>
      
      <main className="w-full max-w-4xl flex-1 flex justify-center">
        <AnimatePresence mode="wait">
          {isTerminalView ? (
            <motion.div
              key="terminal-view"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <Terminal />
            </motion.div>
          ) : (
            <motion.div
              key="gui-view"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <GUIPortfolio />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
