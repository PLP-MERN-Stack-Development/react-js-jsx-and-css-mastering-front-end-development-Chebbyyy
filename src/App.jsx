import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ApiPage from "./pages/ApiPage";
import TaskManager from "./pages/TaskManager";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <main className="flex-grow p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/api" element={<ApiPage />} />
          <Route path="/tasks" element={<TaskManager />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
