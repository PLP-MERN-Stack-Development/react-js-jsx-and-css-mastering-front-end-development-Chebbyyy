// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-gray-900 dark:bg-gray-800 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-xl font-bold tracking-wide">
          <Link to="/">MyReactApp</Link>
        </h1>

        <ul className="flex gap-5 items-center">
          <li>
            <Link to="/" className="hover:text-blue-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/tasks" className="hover:text-blue-400 transition">
              Tasks
            </Link>
          </li>
          <li>
            <Link to="/api" className="hover:text-blue-400 transition">
              API
            </Link>
          </li>
          <li>
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? "🌞" : "🌙"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
