🚀 YH Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite, featuring a sleek design with shadcn/ui components.

✨ Features
Modern Stack: Built with React, TypeScript, and Vite for optimal performance

Beautiful UI: Styled with shadcn/ui components and Tailwind CSS

Responsive Design: Fully responsive across all devices

Fast Performance: Optimized for speed and developer experience

Type Safe: Full TypeScript support for better development experience

🛠️ Tech Stack
Framework: React with TypeScript

Build Tool: Vite

Styling: Tailwind CSS

UI Components: shadcn/ui

Icons: Lucide React (commonly used with shadcn/ui)

🚀 Getting Started
Prerequisites
Node.js 18+ or later

npm, yarn, or pnpm

Installation
Clone the repository:

bash
git clone <your-repo-url>
cd YH-MAIN
Install dependencies:

bash
npm install
# or
yarn install
# or
pnpm install
Run the development server:

bash
npm run dev
# or
yarn dev
# or
pnpm dev
Open http://localhost:5173 in your browser.

📁 Project Structure
text
YH-MAIN/
├── public/
│   └── react.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ui/          # shadcn/ui components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── lib/
│   │   └── utils.ts     # Utility functions
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── components.json       # shadcn/ui configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.app.json    # TypeScript configuration
└── package.json

🎨 Components Overview
Navbar: Navigation header with menu items

Hero: Main landing section with introduction

About: About me section

Skills: Technical skills and proficiencies

Projects: Portfolio projects showcase

Contact: Contact information and form

Footer: Site footer with links

📦 Adding shadcn/ui Components
To add new shadcn/ui components:

bash
npx shadcn-ui@latest add [component-name]
🎯 Customization
Updating Content
Edit the respective component files in src/components/ to update your portfolio content.

Styling
Modify Tailwind classes in components

Update global styles in src/index.css

Configure theme in tailwind.config.js

Adding New Sections
Create new component in src/components/

Import and add to App.tsx

Style with Tailwind CSS and shadcn/ui components

🚀 Deployment
Build for Production
bash
npm run build
The built application will be in the dist folder.

Deploy to Vercel
Install Vercel CLI:

bash
npm i -g vercel
Deploy:

bash
vercel
Other Platforms
You can deploy the dist folder to any static hosting service like Netlify, GitHub Pages, or Firebase Hosting.

🛠️ Available Scripts
npm run dev - Start development server

npm run build - Build for production

npm run preview - Preview production build

npm run lint - Run ESLint
