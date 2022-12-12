import React, { useState } from 'react'
import Header from './component/Header'
import Routes from './Routes'
import ThemeContext from './context/themeProvider'

import './index.css'
import { BrowserRouter } from 'react-router-dom'

export default function App() {
  const [theme, setTheme] = useState('light')

  return (
    <>
      <BrowserRouter>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <Header />
          <Routes />
        </ThemeContext.Provider>
      </BrowserRouter>
    </>
  )
}
