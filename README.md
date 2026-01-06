# QA Mindset

Welcome to the QA Mindset portal! This project is a modern, interactive curriculum for quality assurance professionals, focusing on risk, value, and practical skills for real-world teams.

## 🚀 Features
- Browse a catalog of QA modules covering foundations, strategy, automation, and leadership
- Clean, responsive grid layout with modern design
- Each module includes practical checklists and actionable insights
- Easy navigation between modules
- Built with Vite, React, and Markdown for fast, dynamic content

## 📚 Modules Overview
- QA Foundations & Mindset
- Test Design Techniques
- SDLC + Agile + Scrum Essentials
- Requirements & Acceptance Criteria
- Defect Lifecycle & Bug Reporting
- Test Planning & Strategy
- Exploratory Testing
- Test Data & Environment
- ...and many more!

## 🖥️ Getting Started
1. Clone this repo:
   ```sh
   git clone https://github.com/smilyutin/qa_mindset.git
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the dev server:
   ```sh
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📦 Project Structure
- `src/app/data/modules.ts` — Module catalog (single source of truth)
- `public/modules/` — Markdown content for each module
- `src/app/routes/Modules.tsx` — Main grid view
- `src/app/routes/ModuleDetail.tsx` — Module detail view
- `src/app/components/` — UI components

## 🌐 Live Demo
You can deploy this project to Vercel, Netlify, or GitHub Pages for a public curriculum portal.

## 🌐 Deploying to GitHub Pages

To publish this curriculum portal as a public site:

1. Add a homepage field to your `package.json`:
   ```json
   "homepage": "https://<your-github-username>.github.io/<your-repo-name>"
   ```
2. Install the gh-pages package:
   ```sh
   npm install --save-dev gh-pages
   ```
3. Add deploy scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Build and deploy:
   ```sh
   npm run deploy
   ```
5. In your GitHub repo settings, set Pages source to the `gh-pages` branch.

Your site will be live at:
https://<your-github-username>.github.io/<your-repo-name>

## 🤝 Contributing
Pull requests and suggestions are welcome! Please open an issue or PR to discuss improvements.

## 📄 License
MIT

---

> QA is about risk, value, and helping teams make better decisions. This portal is your guide to a modern QA mindset.
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
