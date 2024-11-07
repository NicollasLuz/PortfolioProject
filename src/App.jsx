import './App.css'
import AppRoutes from './routes'
import React, {useState} from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);
  return (
    <>
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <button onClick={toggleTheme}>Alterar Tema</button>
      </div>
      <AppRoutes />
    </>
  )
}

export default App
