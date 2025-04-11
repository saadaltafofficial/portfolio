'use client';

import React from 'react';

interface TerminalPromptProps {
  command?: string;
  showCursor?: boolean;
}

const TerminalPrompt: React.FC<TerminalPromptProps> = ({ 
  command = '', 
  showCursor = true 
}) => {
  return (
    <div className="flex items-center">
      <span className="terminal-prompt mr-2">user@saad-altaf:~$</span>
      <span>{command}</span>
      {showCursor && (
        <span className="cursor"></span>
      )}
    </div>
  );
};

export default TerminalPrompt;
