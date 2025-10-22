# my-react-js-app

A small React + Vite starter with Tailwind, dark mode, a task manager, and a posts listing (JSONPlaceholder).

## Quick start

Install and run the dev server:

```sh
npm install
npm run dev

Available scripts (see package.json):

npm run dev — start dev server
npm run build — build for production
npm run preview — preview production build
npm run lint — run ESLint
Features
Light / dark theme using ThemeProvider
Persistent tasks via useLocalStorage
Task management UI (component + page)
Posts listing with pagination and optional infinite scroll (JSONPlaceholder)
Small set of reusable UI components (Button, Card, Skeleton, Navbar, Footer)
Project structure (high level)
src/App.jsx — main app & routes (component: App)
src/main.jsx — app entry (wraps ThemeProvider)
src/index.css — Tailwind imports & global styles
src/App.css — example app styles
src/context/ThemeContext.jsx — theme provider & hook (ThemeProvider, useTheme)
src/hooks/useLocalStorage.js — localStorage sync hook (useLocalStorage)
Pages:
src/pages/Home.jsx — Home
src/pages/ApiPage.jsx — ApiPage (posts)
src/pages/TaskManager.jsx — TaskManager page
Components:
src/components/Navbar.jsx — Navbar
src/components/Footer.jsx — Footer
src/components/Button.jsx — Button
src/components/Card.jsx — Card
src/components/Skeleton.jsx — Skeleton
src/components/TaskManager.jsx — reusable TaskManager component
Notes
Tailwind is configured in tailwind.config.js
Vite config is vite.config.js
PostCSS config: postcss.config.js
ESLint config: eslint.config.js
Entry HTML: index.html
Demo
https://verdant-druid-f95133.netlify.app/

Workspace files (quick links)

.gitignore
eslint.config.js
index.html
package.json
postcss.config.js
README.md
tailwind.config.js
vite.config.js
public/
src/App.css
src/App.jsx — App
src/index.css
src/main.jsx
src/assets/
src/components/Button.jsx — Button
src/components/Card.jsx — Card
src/components/Footer.jsx — Footer
src/components/Navbar.jsx — Navbar
src/components/Skeleton.jsx — Skeleton
src/components/TaskManager.jsx — component TaskManager
src/context/ThemeContext.jsx — ThemeProvider, useTheme
src/hooks/useLocalStorage.js — useLocalStorage
src/pages/ApiPage.jsx — ApiPage
src/pages/Home.jsx — Home
src/pages/TaskManager.jsx — page TaskManager