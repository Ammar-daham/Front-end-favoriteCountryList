import React, { useState } from 'react'
import Header from './component/Header'
import Routes from './Routes'
import ThemeContext from './context/themeProvider'
import { BrowserRouter as Router } from 'react-router-dom'

import './index.css'

export default function App() {
  const [theme, setTheme] = useState('light')

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Router>
          <Header />
          <Routes />
        </Router>
      </ThemeContext.Provider>
    </>
  )
}
