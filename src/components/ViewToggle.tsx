'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaTerminal, FaDesktop } from 'react-icons/fa';

interface ViewToggleProps {
  isTerminalView: boolean;
  toggleView: () => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ isTerminalView, toggleView }) => {
  return (
    <motion.div 
      className="view-toggle-container mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <button 
        onClick={toggleView} 
        className="view-toggle-button"
        aria-label={isTerminalView ? "Switch to GUI View" : "Switch to Terminal View"}
      >
        <div className={`toggle-track ${isTerminalView ? '' : 'toggle-track-active'}`}>
          <div className="toggle-icons">
            <FaTerminal className={`toggle-icon ${isTerminalView ? 'toggle-icon-active' : ''}`} />
            <FaDesktop className={`toggle-icon ${!isTerminalView ? 'toggle-icon-active' : ''}`} />
          </div>
          <div className={`toggle-thumb ${isTerminalView ? '' : 'toggle-thumb-right'}`} />
        </div>
        <span className="toggle-label">
          {isTerminalView ? "Switch to GUI View" : "Switch to Terminal View"}
        </span>
      </button>
    </motion.div>
  );
};

export default ViewToggle;
