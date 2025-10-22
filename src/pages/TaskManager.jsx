import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Card from "../components/Card";
import Button from "../components/Button";

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [taskInput, setTaskInput] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (!taskInput.trim()) return;
    const newTask = {
      id: Date.now(),
      text: taskInput.trim(),
      completed: false,
    };
    setTasks([newTask, ...tasks]);
    setTaskInput("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const clearCompleted = () => {
    setTasks(tasks.filter((t) => !t.completed));
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        📝 Task Manager
      </h1>

      <Card>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Add a new task..."
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            className="flex-1 border rounded p-2 focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-white"
          />
          <Button onClick={addTask}>Add</Button>
        </div>

        {tasks.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-300">
            No tasks yet. Add one above!
          </p>
        ) : (
          <>
            <ul className="space-y-2">
              {filteredTasks.map((task) => (
                <li
                  key={task.id}
                  className={`flex justify-between items-center p-3 rounded border dark:border-gray-700 ${
                    task.completed
                      ? "bg-green-50 dark:bg-green-900/30 line-through opacity-75"
                      : "bg-white dark:bg-gray-800"
                  }`}
                >
                  <span
                    onClick={() => toggleTask(task.id)}
                    className="cursor-pointer flex-1"
                  >
                    {task.text}
                  </span>
                  <Button
                    variant="default"
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </Button>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex justify-between items-center text-sm">
              <div className="flex gap-2">
                <Button
                  variant={filter === "all" ? "primary" : "default"}
                  onClick={() => setFilter("all")}
                >
                  All
                </Button>
                <Button
                  variant={filter === "active" ? "primary" : "default"}
                  onClick={() => setFilter("active")}
                >
                  Active
                </Button>
                <Button
                  variant={filter === "completed" ? "primary" : "default"}
                  onClick={() => setFilter("completed")}
                >
                  Completed
                </Button>
              </div>
              <Button variant="default" onClick={clearCompleted}>
                Clear Completed
              </Button>
            </div>
          </>
        )}
      </Card>
    </div>
  );
}
