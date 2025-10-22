import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");
  const { theme, toggleTheme } = useTheme();

  const addTask = () => {
    if (newTask.trim() === "") return;
    const newEntry = { id: Date.now(), text: newTask, completed: false };
    setTasks([...tasks, newEntry]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transition-all">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          📝 Task Manager
        </h2>
        <button
          onClick={toggleTheme}
          className="text-sm bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-lg hover:opacity-80 transition"
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>

      <div className="flex mb-4">
        <input
          type="text"
          className="flex-grow border rounded-l-lg p-2 focus:outline-none dark:bg-gray-700 dark:text-gray-100"
          placeholder="Enter a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition"
        >
          Add
        </button>
      </div>

      <div className="flex justify-center mb-4 space-x-2">
        {["all", "active", "completed"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 rounded-lg capitalize ${
              filter === f
                ? "bg-blue-500 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <ul className="space-y-2">
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center border-b pb-2 dark:border-gray-600"
          >
            <span
              onClick={() => toggleTask(task.id)}
              className={`cursor-pointer ${
                task.completed
                  ? "line-through text-gray-400"
                  : "text-gray-800 dark:text-gray-100"
              }`}
            >
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 hover:text-red-700"
            >
              ✖
            </button>
          </li>
        ))}
      </ul>

      {filteredTasks.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-4">
          No tasks found
        </p>
      )}
    </div>
  );
}
