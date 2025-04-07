# Yak'n'run

A experiment using only CSS animations and AI-generated sprite images to create a running yak game

## Overview

The project features a running yak character that moves through a parallax scrolling forest environment.

## Technology Stack

- **Next.js**: React framework for the application structure
- **next-yak**: Custom styling solution (CSS-in-JS) for the project
- **CSS Animations**: Keyframes for sprite animations and parallax effects
- **AVIF Images**: Modern image format for efficient sprite sheets

## Project Structure

```
├─ app
│  ├─ global.css        # Global styles
│  ├─ layout.tsx        # Root layout component 
│  └─ page.tsx          # Main page component
└─ components
   ├─ hero              # Yak character component
      ├─ images         # Hero image assets
   │  └─ hero.tsx       # Sprite animation implementation
   └─ level             # Environment components
      ├─ images         # Background image assets
      └─ level.tsx      # Parallax background implementation
```

## Running the Project

1. Clone the repository
2. Install dependencies with `npm install`
3. Run the development server with `npm run dev`
4. Open your browser to `http://localhost:3000`

## Credits

- Character and background sprites generated using ChatGPT and meshy.ai
- Built with Next.js
