'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import TerminalPrompt from '@/components/TerminalPrompt';
import TerminalOutput from '@/components/TerminalOutput';

interface Command {
  input: string;
  output: React.ReactNode;
}

const Terminal: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [history, setHistory] = useState<Command[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Auto-focus the input field and scroll to bottom when history changes
  useEffect(() => {
    inputRef.current?.focus();
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Initial welcome message
  useEffect(() => {
    const welcomeMessage = (
      <div className="mb-4">
        <div className="terminal-profile-container">
          <img src="/dp.png" alt="Saad Altaf" className="terminal-profile-image" />
        </div>
        <p className="typing-effect text-xl mb-4" style={{ width: '100%', animationDuration: '2s' }}>
          <span style={{ color: 'var(--gradient-start)' }}>Welcome</span> <span style={{ color: 'var(--gradient-end)' }}>to Saad's Terminal Portfolio!</span>
        </p>
        <p className="mb-3">I'm a <span style={{ color: 'var(--accent-color)' }}>React + TypeScript Developer</span> passionate about creating beautiful web experiences.</p>
        <p className="mb-3">Currently exploring <span style={{ color: 'var(--info-color)' }}>Web3</span> and <span style={{ color: 'var(--warning-color)' }}>Creative Development</span> with GSAP & Three.js</p>
        <p className="mb-3">Type <span style={{ color: 'var(--warning-color)' }}>&apos;help&apos;</span> to see available commands.</p>
        <p className="text-sm opacity-70">© {new Date().getFullYear()} - Saad Altaf</p>
      </div>
    );
    
    setHistory([{ input: '', output: welcomeMessage }]);
  }, []);

  const handleCommandSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add the command to history
    const newHistoryItem = { input: input, output: processCommand(input) };
    setHistory([...history, newHistoryItem]);
    
    // Update command history for up/down navigation
    setCommandHistory([...commandHistory, input]);
    setHistoryIndex(-1);
    
    // Clear the command input
    setInput('');
    
    // Scroll to bottom
    setTimeout(() => {
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      }
    }, 100);
  };
  
  // Focus the input field when the terminal is clicked
  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  const processCommand = (cmd: string): React.ReactNode => {
    const command = cmd.trim().toLowerCase();
    
    // Split command and arguments
    const args = command.split(' ');
    const mainCommand = args[0];
    
    switch (mainCommand) {
      case 'help':
        return (
          <div className="space-y-3 command-output">
            <p style={{ color: 'var(--warning-color)', fontWeight: 'bold', marginBottom: '10px' }}>Available Commands:</p>
            <p><span style={{ color: 'var(--accent-color)', fontWeight: '500' }}>about</span> - Learn about me</p>
            <p><span style={{ color: 'var(--accent-color)', fontWeight: '500' }}>skills</span> - View my technical skills</p>
            <p><span style={{ color: 'var(--accent-color)', fontWeight: '500' }}>projects</span> - Browse my projects</p>
            <p><span style={{ color: 'var(--accent-color)', fontWeight: '500' }}>contact</span> - Get my contact information</p>
            <p><span style={{ color: 'var(--accent-color)', fontWeight: '500' }}>clear</span> - Clear the terminal</p>
            <p><span style={{ color: 'var(--accent-color)', fontWeight: '500' }}>help</span> - Show this help message</p>
          </div>
        );
        
      case 'about':
        return (
          <div className="space-y-4 command-output">
            <p style={{ color: 'var(--warning-color)', fontWeight: 'bold', marginBottom: '15px' }}>About Me:</p>
            
            <div className="project-card">
              <h3>Background</h3>
              <p>I'm Saad Altaf, a passionate Frontend Developer currently working at Beenco. Based in Pakistan, I specialize in creating modern web applications with React and TypeScript. My journey in tech began with a fascination for creating interactive user experiences, and I've been building and learning ever since.</p>
            </div>
            
            <div className="project-card">
              <h3>Expertise</h3>
              <p>I specialize in frontend development using React, TypeScript, and modern JavaScript. I'm experienced in building responsive, accessible, and performant web applications with clean, maintainable code. I'm also exploring Web3 technologies and creative development with GSAP and Three.js.</p>
            </div>
            
            <div className="project-card">
              <h3>Education & Work</h3>
              <p>I studied at Virtual University of Pakistan and currently work as a Frontend Engineer. I've worked on numerous projects ranging from business websites to complex web applications, always focusing on delivering high-quality code and exceptional user experiences.</p>
            </div>
            
            <div className="project-card">
              <h3>Interests</h3>
              <p>When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, reading technical blogs, or enjoying the outdoors. I'm passionate about continuous learning and staying updated with the latest industry trends in web development and design.</p>
            </div>
          </div>
        );
        
      case 'skills':
        return (
          <div className="space-y-4 command-output">
            <p style={{ color: 'var(--warning-color)', fontWeight: 'bold', marginBottom: '10px' }}>Technical Skills:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p style={{ color: 'var(--accent-color)', fontWeight: 'bold', marginBottom: '8px' }}>Frontend:</p>
                <div className="flex flex-wrap">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">TypeScript</span>
                  <span className="skill-tag">Next.js</span>
                  <span className="skill-tag">HTML5</span>
                  <span className="skill-tag">CSS3</span>
                  <span className="skill-tag">Tailwind CSS</span>
                  <span className="skill-tag">GSAP</span>
                  <span className="skill-tag">Three.js</span>
                  <span className="skill-tag">Framer Motion</span>
                </div>
              </div>
              
              <div>
                <p style={{ color: 'var(--accent-color)', fontWeight: 'bold', marginBottom: '8px' }}>Web3 & Blockchain:</p>
                <div className="flex flex-wrap">
                  <span className="skill-tag">Web3.js</span>
                  <span className="skill-tag">Ethers.js</span>
                  <span className="skill-tag">Smart Contracts</span>
                  <span className="skill-tag">dApps</span>
                  <span className="skill-tag">Blockchain Concepts</span>
                </div>
              </div>
              
              <div>
                <p style={{ color: 'var(--accent-color)', fontWeight: 'bold', marginBottom: '8px' }}>Backend & Tools:</p>
                <div className="flex flex-wrap">
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Express</span>
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">GitHub</span>
                  <span className="skill-tag">RESTful APIs</span>
                  <span className="skill-tag">Vercel</span>
                  <span className="skill-tag">Netlify</span>
                </div>
              </div>
              
              <div>
                <p style={{ color: 'var(--accent-color)', fontWeight: 'bold', marginBottom: '8px' }}>Design & Other:</p>
                <div className="flex flex-wrap">
                  <span className="skill-tag">UI/UX Design</span>
                  <span className="skill-tag">Responsive Design</span>
                  <span className="skill-tag">Creative Coding</span>
                  <span className="skill-tag">Animation</span>
                  <span className="skill-tag">Problem Solving</span>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'projects':
        return (
          <div className="space-y-5 command-output">
            <p style={{ color: 'var(--warning-color)', fontWeight: 'bold', marginBottom: '15px' }}>My Projects:</p>
            
            <div className="project-card">
              <h3>Web3 Wallet Dashboard</h3>
              <p>A modern dashboard for Web3 wallets with transaction history, portfolio tracking, and NFT display capabilities.</p>
              <p className="text-sm mt-2">
                <span style={{ color: 'var(--info-color)' }}>Tech: </span> 
                <span className="skill-tag">React</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">Web3.js</span>
                <span className="skill-tag">Ethers.js</span>
                <span className="skill-tag">Tailwind CSS</span>
              </p>
              <p className="mt-3">
                <a href="https://github.com/saadaltafofficial" className="terminal-link mr-4">Demo</a>
                <a href="https://github.com/saadaltafofficial" className="terminal-link">GitHub</a>
              </p>
            </div>
            
            <div className="project-card">
              <h3>Interactive Portfolio</h3>
              <p>A creative portfolio website with 3D elements, animations, and interactive UI components to showcase my work.</p>
              <p className="text-sm mt-2">
                <span style={{ color: 'var(--info-color)' }}>Tech: </span>
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">Three.js</span>
                <span className="skill-tag">GSAP</span>
                <span className="skill-tag">Framer Motion</span>
              </p>
              <p className="mt-3">
                <a href="https://github.com/saadaltafofficial" className="terminal-link mr-4">Demo</a>
                <a href="https://github.com/saadaltafofficial" className="terminal-link">GitHub</a>
              </p>
            </div>
            
            <div className="project-card">
              <h3>E-Commerce Platform</h3>
              <p>A full-featured e-commerce solution with product management, cart functionality, and secure payment integration.</p>
              <p className="text-sm mt-2">
                <span style={{ color: 'var(--info-color)' }}>Tech: </span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express</span>
                <span className="skill-tag">MongoDB</span>
              </p>
              <p className="mt-3">
                <a href="https://github.com/saadaltafofficial" className="terminal-link mr-4">Demo</a>
                <a href="https://github.com/saadaltafofficial" className="terminal-link">GitHub</a>
              </p>
            </div>
            
            <div className="project-card">
              <h3>Creative Animation Showcase</h3>
              <p>A collection of creative web animations and interactive elements built with modern animation libraries.</p>
              <p className="text-sm mt-2">
                <span style={{ color: 'var(--info-color)' }}>Tech: </span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">GSAP</span>
                <span className="skill-tag">Framer Motion</span>
                <span className="skill-tag">CSS Animations</span>
              </p>
              <p className="mt-3">
                <a href="https://github.com/saadaltafofficial" className="terminal-link mr-4">Demo</a>
                <a href="https://github.com/saadaltafofficial" className="terminal-link">GitHub</a>
              </p>
            </div>
            
            <p className="text-sm mt-4">Type <span style={{ color: 'var(--warning-color)' }}>&apos;projects [name]&apos;</span> to get more details about a specific project.</p>
          </div>
        );
        
      case 'contact':
        return (
          <div className="space-y-4 command-output">
            <p style={{ color: 'var(--warning-color)', fontWeight: 'bold', marginBottom: '10px' }}>Contact Information:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="project-card">
                <p className="flex items-center mb-2">
                  <FaEnvelope style={{ color: 'var(--info-color)', marginRight: '10px', fontSize: '1.2rem' }} /> 
                  <a href="mailto:saadaltaf986@gmail.com" className="terminal-link">saadaltaf986@gmail.com</a>
                </p>
                <p className="text-sm">Feel free to email me for any inquiries or just to say hello!</p>
              </div>
              
              <div className="project-card">
                <p className="flex items-center mb-2">
                  <FaGithub style={{ color: 'var(--info-color)', marginRight: '10px', fontSize: '1.2rem' }} /> 
                  <a href="https://github.com/saadaltafofficial" target="_blank" rel="noopener noreferrer" className="terminal-link">github.com/saadaltafofficial</a>
                </p>
                <p className="text-sm">Check out my projects and contributions on GitHub.</p>
              </div>
              
              <div className="project-card">
                <p className="flex items-center mb-2">
                  <FaLinkedin style={{ color: 'var(--info-color)', marginRight: '10px', fontSize: '1.2rem' }} /> 
                  <a href="https://linkedin.com/in/osaadaltaf" target="_blank" rel="noopener noreferrer" className="terminal-link">linkedin.com/in/osaadaltaf</a>
                </p>
                <p className="text-sm">Connect with me on LinkedIn for professional inquiries.</p>
              </div>
            </div>
            
            <p className="mt-3">Feel free to reach out! I'm always open to new opportunities and collaborations in React, TypeScript, and Web3 development.</p>
          </div>
        );
        
      case 'clear':
        // Clear all history except the welcome message
        setTimeout(() => {
          const welcomeMessage = history[0];
          setHistory([welcomeMessage]);
        }, 100);
        return null;
        
      default:
        return (
          <p className="text-red-400">
            Command not found: {command}. Type <span className="text-yellow-300">&apos;help&apos;</span> to see available commands.
          </p>
        );
    }
  };

  return (
    <motion.div 
      className="terminal-window w-full max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="terminal-header">
        <div className="flex">
          <div className="terminal-button"></div>
          <div className="terminal-button"></div>
          <div className="terminal-button"></div>
        </div>
        <div className="terminal-title">saad-altaf.dev ~ user@terminal</div>
      </div>
      
      <div className="terminal-content h-[70vh] overflow-auto" ref={terminalRef} onClick={() => inputRef.current?.focus()}>
        {/* Command history */}
        {history.map((item, index) => (
          <div key={index} className="mb-4">
            {/* Only show the prompt for user inputs (not the welcome message) */}
            {item.input && (
              <TerminalPrompt command={item.input} showCursor={false} />
            )}
            
            {/* Command output */}
            <TerminalOutput>
              {item.output}
            </TerminalOutput>
          </div>
        ))}
        
        {/* Current command input */}
        <form onSubmit={handleCommandSubmit}>
          <div className="flex items-center">
            <TerminalPrompt command={input} showCursor={!isFocused} />
            <input
              ref={inputRef}
              type="text"
              className="terminal-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              autoFocus
              aria-label="Terminal command input"
            />
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Terminal;
