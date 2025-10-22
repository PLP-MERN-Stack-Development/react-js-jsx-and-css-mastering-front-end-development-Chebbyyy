import React from "react";

export default function Skeleton({ count = 5 }) {
  return (
    <ul className="animate-pulse grid grid-cols-1 md:grid-cols-2 gap-3">
      {Array.from({ length: count }).map((_, i) => (
        <li
          key={i}
          className="p-3 border rounded bg-gray-200 dark:bg-gray-700 h-24"
        >
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
          <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-5/6 mt-1"></div>
        </li>
      ))}
    </ul>
  );
}
