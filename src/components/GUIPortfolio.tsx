'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaUserAlt, FaProjectDiagram } from 'react-icons/fa';

const GUIPortfolio: React.FC = () => {
  return (
    <div className="gui-container flex flex-col items-center w-full">
      {/* Hero Section */}
      <motion.section 
        className="hero-section mb-16 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          <motion.div
            className="profile-image-container mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <Image 
              src="/dp.png" 
              alt="Saad Altaf" 
              className="profile-image" 
              width={120}
              height={120}
            />
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Saad Altaf
          </motion.h1>
          <motion.p 
            className="max-w-2xl mx-auto text-[var(--foreground)] opacity-80 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            I&apos;m a Dev who builds fast UIs, smart backends, and real-world dApps. <span className="text-[var(--info-color)]">React + TypeScript</span> on the front. <span className="text-[var(--warning-color)]">Blockchain</span> and Python automation behind the scenes.
            
            Also crafting sites with WordPress, Webflow, and Shopify. Let&apos;s create something meaningful.
          </motion.p>
          <motion.p 
            className="text-sm text-[var(--foreground)] opacity-60 text-center w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Scroll down to explore my work and skills
          </motion.p>
          <motion.div 
            className="flex justify-center space-x-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <a href="https://github.com/saadaltafofficial" target="_blank" rel="noopener noreferrer" className="social-icon-link">
              <FaGithub size={28} />
            </a>
            <a href="https://linkedin.com/in/osaadaltaf" target="_blank" rel="noopener noreferrer" className="social-icon-link">
              <FaLinkedin size={28} />
            </a>
            <a href="mailto:saadaltaf986@gmail.com" className="social-icon-link">
              <FaEnvelope size={28} />
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <section className="section-container w-full" id="about">
        <div className="section-header">
          <FaUserAlt className="section-icon" />
          <h2 className="section-title">About Me</h2>
        </div>
        
        <div className="gui-card">
          <p className="mb-4">
            I&apos;m Saad Altaf —— a curious builder who started with frontend design and ended up diving deep into full stack and blockchain development. I love working with modern tools like React and TypeScript, but I also thrive in backend systems, server setups, and scripting in Python for automation and AI.
          </p>
          <p className="mb-4">
            I&apos;ve developed practical blockchain apps, tinkered with validators and nodes, and handled Linux servers on Ubuntu and Kali. I also enjoy designing and managing websites through platforms like Shopify, WordPress, and Webflow.
          </p>
          <p>
            Whether it&apos;s writing clean UI code or building smart on-chain tools, I find joy in solving problems and learning something new every day.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-container" id="skills">
        <div className="section-header">
          <FaCode className="section-icon" />
          <h2 className="section-title">Skills</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="gui-card">
            <h3 className="card-title">Frontend</h3>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="gui-tag">React</span>
              <span className="gui-tag">TypeScript</span>
              <span className="gui-tag">Next.js</span>
              <span className="gui-tag">HTML5</span>
              <span className="gui-tag">CSS3</span>
              <span className="gui-tag">Tailwind CSS</span>
              <span className="gui-tag">GSAP</span>
              <span className="gui-tag">Three.js</span>
              <span className="gui-tag">Framer Motion</span>
            </div>
          </div>
          
          <div className="gui-card">
            <h3 className="card-title">Web3 & Blockchain</h3>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="gui-tag">Web3.js</span>
              <span className="gui-tag">Ethers.js</span>
              <span className="gui-tag">Smart Contracts</span>
              <span className="gui-tag">dApps</span>
              <span className="gui-tag">Blockchain Concepts</span>
            </div>
          </div>
          
          <div className="gui-card">
            <h3 className="card-title">Backend & Tools</h3>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="gui-tag">Node.js</span>
              <span className="gui-tag">Express</span>
              <span className="gui-tag">Git</span>
              <span className="gui-tag">GitHub</span>
              <span className="gui-tag">RESTful APIs</span>
              <span className="gui-tag">Vercel</span>
              <span className="gui-tag">Netlify</span>
            </div>
          </div>
          
          <div className="gui-card">
            <h3 className="card-title">Design & Other</h3>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="gui-tag">Figma</span>
              <span className="gui-tag">UI/UX Design</span>
              <span className="gui-tag">Responsive Design</span>
              <span className="gui-tag">Creative Coding</span>
              <span className="gui-tag">Animation</span>
              <span className="gui-tag">Problem Solving</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-container" id="projects">
        <div className="section-header">
          <FaProjectDiagram className="section-icon" />
          <h2 className="section-title">Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            className="gui-card project-card-gui"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <h3 className="card-title">Assembly Endgame</h3>
            <p className="mb-4">Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="gui-tag-sm">React</span>
              <span className="gui-tag-sm">JavaScript</span>
              <span className="gui-tag-sm">Tailwind CSS</span>
            </div>
            <div className="flex justify-center gap-6">
              <a href="https://assemblyendgamebysaad.netlify.app/" className="gui-button">Demo</a>
              <a href="https://github.com/saadaltafofficial/Assembly-Endgame" className="gui-button-outline">GitHub</a>
            </div>
          </motion.div>
          
          <motion.div 
            className="gui-card project-card-gui"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <h3 className="card-title">Custom Site in Next.js</h3>
            <p className="mb-4">Custom site built with Next.js and TypeScript, featuring a responsive design and smooth animations.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="gui-tag-sm">Next.js</span>
              <span className="gui-tag-sm">TypeScript</span>
              <span className="gui-tag-sm">Framer Motion</span>
            </div>
            <div className="flex justify-center gap-6">
              <a href="https://sample-design-page-3991jkluz-ignismeows-projects.vercel.app/" className="gui-button">Demo</a>
              <a href="https://github.com/saadaltafofficial/sample-design-page" className="gui-button-outline">GitHub</a>
            </div>
          </motion.div>
          
          <motion.div 
            className="gui-card project-card-gui"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <h3 className="card-title">Trading Bot on Telegram</h3>
            <p className="mb-4">A powerful Telegram bot for trading on the Injective Chain directly from Telegram. This bot allows users to manage wallets, check portfolio balances, and execute trades on Injective DEX.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="gui-tag-sm">TypeScript</span>
              <span className="gui-tag-sm">Node.js</span>
              <span className="gui-tag-sm">Express</span>
              <span className="gui-tag-sm">MongoDB</span>
              <span className="gui-tag-sm">Injective SDK</span>
              <span className="gui-tag-sm">Ethers.js</span>
            </div>
            <div className="flex justify-center gap-6">
              <a href="https://github.com/saadaltafofficial/injective_tradingbot_telegram" className="gui-button">Demo</a>
              <a href="https://github.com/saadaltafofficial/injective_tradingbot_telegram" className="gui-button-outline">GitHub</a>
            </div>
          </motion.div>
          <motion.div 
            className="gui-card project-card-gui"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <h3 className="card-title">Certificates</h3>
            <p className="mb-4">Here are some of the certificates I have earned.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="gui-tag-sm">TypeScript</span>
              <span className="gui-tag-sm">Python</span>
              <span className="gui-tag-sm">React</span>
              <span className="gui-tag-sm">Node.js</span>
              <span className="gui-tag-sm">Express</span>
              <span className="gui-tag-sm">MongoDB</span>
              <span className="gui-tag-sm">Injective SDK</span>
              <span className="gui-tag-sm">Ethers.js</span>
            </div>
            <div className="flex justify-center gap-6">
              <a href="https://github.com/saadaltafofficial/certificates" className="gui-button">Demo</a>
              <a href="https://github.com/saadaltafofficial/certificates" className="gui-button-outline">GitHub</a>
            </div>
          </motion.div>
          
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-container" id="contact">
        <div className="section-header">
          <FaEnvelope className="section-icon" />
          <h2 className="section-title">Contact</h2>
        </div>
        
        <div className="gui-card">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <h3 className="font-medium mb-2">Email</h3>
              <a href="mailto:saadaltaf986@gmail.com" className="gui-link">saadaltaf986@gmail.com</a>
              <p className="text-sm mt-2 opacity-70">Feel free to email me for any inquiries or just to say hello!</p>
            </div>
            
            <div className="contact-item">
              <FaGithub className="contact-icon" />
              <h3 className="font-medium mb-2">GitHub</h3>
              <a href="https://github.com/saadaltafofficial" target="_blank" rel="noopener noreferrer" className="gui-link">github.com/saadaltafofficial</a>
              <p className="text-sm mt-2 opacity-70">Check out my projects and contributions on GitHub.</p>
            </div>
            
            <div className="contact-item">
              <FaLinkedin className="contact-icon" />
              <h3 className="font-medium mb-2">LinkedIn</h3>
              <a href="https://linkedin.com/in/osaadaltaf" target="_blank" rel="noopener noreferrer" className="gui-link">linkedin.com/in/osaadaltaf</a>
              <p className="text-sm mt-2 opacity-70">Connect with me on LinkedIn for professional inquiries.</p>
            </div>
          </div>
          
          <div className="w-full flex justify-center mt-8">
            <p className="text-center max-w-2xl">
              Open to tech collaborations and opportunities—whether it&apos;s React apps, smart contract integrations, or full-stack solutions. Always up for building and learning.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GUIPortfolio;
