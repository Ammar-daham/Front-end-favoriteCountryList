import React, { useContext } from 'react'
import ThemeContext from '../context/themeProvider'
import { Switch } from '@mui/material'

import { AppBar, Toolbar } from '@mui/material'
import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { AppTheme } from '../context/AppTheme'

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const headerStyle: AppTheme = {
    dark: {
      background: '#3700B3',
      color: 'white',
    },
    light: {
      background: '#BB86FC',
      color: 'black',
    },
    common: {
      transition: 'all 1s ease',
    },
  }

  const themeStyle = {
    ...headerStyle.common,
    ...(theme === 'light' ? headerStyle.light : headerStyle.dark),
  }

  const handleThemeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <>
      <AppBar position="sticky" style={themeStyle}>
        <Toolbar>
          <IconButton size="large" edge="start" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Switch onChange={handleThemeToggle} checked={theme === 'light'} />
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
