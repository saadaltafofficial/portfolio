/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: 'var(--terminal-bg)',
          text: 'var(--terminal-text)',
          prompt: 'var(--terminal-prompt)',
          cursor: 'var(--terminal-cursor)',
          selection: 'var(--terminal-selection)',
        },
        accent: 'var(--accent-color)',
        secondary: 'var(--secondary-color)',
      },
      fontFamily: {
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
        sans: ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
  safelist: [
    'font-mono',
    'font-sans',
    'bg-transparent',
    'text-green-400',
    'text-yellow-300',
    'text-red-400',
    'text-gray-400',
  ],
}
