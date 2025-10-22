import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () =>
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))

  const value = { theme, toggleTheme }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

function useTheme() {
  return useContext(ThemeContext)
}

export { ThemeProvider, useTheme }
