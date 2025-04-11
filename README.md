# Terminal Portfolio

A modern, interactive terminal-style portfolio website built with Next.js and TypeScript. This project creates an engaging terminal-like interface to showcase your projects, skills, and contact information in a unique way.

![Terminal Portfolio Screenshot](screenshot.png)

## Features

- 💻 Terminal-style interface with command-line interaction
- 🚀 Interactive command system with history navigation
- 📁 Project showcase with detailed information
- 🛠️ Skills and experience display
- 📱 Responsive design that works on all devices
- 🎨 Customizable styling with CSS variables
- ⚡ Built with Next.js and TypeScript for optimal performance

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/terminal-portfolio.git
cd terminal-portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Commands

The terminal interface supports the following commands:

- `help` - Display available commands
- `about` - Learn about the portfolio owner
- `skills` - View technical skills
- `projects` - Browse projects
- `contact` - Get contact information
- `clear` - Clear the terminal screen

## Customization

### Personal Information

To customize the portfolio with your information, edit the following files:

- `src/components/Terminal.tsx` - Update the command responses with your personal information, projects, and skills

### Styling

You can customize the appearance by modifying the CSS variables in `src/app/globals.css`:

```css
:root {
  --background: #0a0a0a;         /* Main background color */
  --foreground: #ededed;         /* Main text color */
  --terminal-bg: #1e1e1e;        /* Terminal background */
  --terminal-text: #f8f8f8;      /* Terminal text color */
  --terminal-prompt: #4caf50;    /* Command prompt color */
  --accent-color: #4caf50;       /* Accent color for highlights */
  --secondary-color: #03a9f4;    /* Secondary accent color */
}
```

## Deployment

This project can be easily deployed to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fterminal-portfolio)

Alternatively, you can build the project for production:

```bash
npm run build
npm run start
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with [Next.js](https://nextjs.org)
- Styled with CSS
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
