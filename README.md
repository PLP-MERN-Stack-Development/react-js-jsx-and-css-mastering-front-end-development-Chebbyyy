# 🌟 **React Task Manager — Front-End Development Project**

## 🚀 **Overview**

This project is built as part of **Week 3: React.js, JSX, and Tailwind CSS – Mastering Front-End Development**.  
It demonstrates the complete front-end development workflow — from project setup and component architecture to state management, API integration, and responsive UI design.

Deployed Live Demo 👉 [**View Live on Netlify**](https://verdant-druid-f95133.netlify.app/)

---

## 🧩 **Key Features**

### 🧱 **Task 1 – Project Setup**
- ⚙️ Built with **Vite** for a fast React development environment  
- 💨 Configured **Tailwind CSS** for utility-first styling  
- 🗂️ Organized folder structure:

src/
├── components/
├── context/
├── hooks/
├── pages/
├── App.jsx
├── main.jsx


### 🧠 **Task 2 – Component Architecture**
- 🔘 **Reusable Components**:
- Button (Primary, Secondary, Danger)
- Card (for clean content display)
- Navbar (site navigation)
- Footer (with links and copyright)
- 📦 Components accept **props** for reusability and customization
- 🧩 Implemented a consistent layout including Navbar and Footer

### ✅ **Task 3 – State Management & Hooks**
- 🗒️ **Task Manager** functionality:
- Add new tasks  
- Mark tasks as completed  
- Delete tasks  
- Filter tasks (**All**, **Active**, **Completed**)  
- ⚙️ **Hooks Used**:
- `useState` for state handling  
- `useEffect` for side effects and persistence  
- `useContext` for theme (Light/Dark mode) management  
- 💾 Created a custom hook `useLocalStorage` for task persistence

### 🌐 **Task 4 – API Integration**
- 🔗 Fetched posts from **JSONPlaceholder API**
- 📃 Displayed data in a responsive card layout
- 🕒 Implemented loading and error states
- 🔍 Added **search with debounce**
- 📜 Pagination + optional infinite scroll using `IntersectionObserver`

### 🎨 **Task 5 – Tailwind Styling**
- 📱 Fully **responsive** on mobile, tablet, and desktop  
- 🌗 **Light/Dark mode** toggle implemented with context and Tailwind dark classes  
- 💫 Smooth transitions and hover animations  
- 💎 Clean, modern, accessible design

---

## 🛠️ **Tech Stack**

| Category | Technology |
|-----------|-------------|
| Framework | React (Vite) |
| Styling | Tailwind CSS |
| Routing | React Router |
| State | React Hooks & Context API |
| API | JSONPlaceholder |
| Deployment | Netlify |

---

## ⚙️ **Setup Instructions**

### 1️⃣ **Clone the repository**
```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME

###2️⃣ Install dependencies
npm install

###3️⃣ Run development server
npm run dev

###4️⃣ Build for production
npm run build

###5️⃣ Deploy

Deployed automatically via Netlify CI/CD
Build command → npm run build
Publish directory → dist/

🧭 Folder Structure
src/
├── components/
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Navbar.jsx
│   └── Footer.jsx
├── context/
│   └── ThemeContext.jsx
├── hooks/
│   └── useLocalStorage.jsx
├── pages/
│   ├── Home.jsx
│   ├── TaskManager.jsx
│   └── ApiPage.jsx
├── App.jsx
├── main.jsx
└── index.css

💡 Highlights

✅ Follows React best practices and clean code architecture

🧩 Modular, reusable component design

🌓 Dark mode with context and Tailwind integration

🧠 Demonstrates understanding of useState, useEffect, useContext, and custom hooks

🌍 API integration with graceful fallback (loading, error, search, pagination)


🌐 Live Demo

🚀 View the Deployed Application:
👉 https://verdant-druid-f95133.netlify.app/
