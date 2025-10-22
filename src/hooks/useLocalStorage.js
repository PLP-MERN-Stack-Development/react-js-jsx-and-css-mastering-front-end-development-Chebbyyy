import { useState, useEffect } from "react";

/**
 * Custom hook that syncs state to localStorage
 * @param {string} key - The localStorage key
 * @param {*} initialValue - Default value if none exists
 */
export default function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error reading localStorage key:", key, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("Error saving to localStorage key:", key, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
