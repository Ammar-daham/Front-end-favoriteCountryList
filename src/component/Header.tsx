import React, { useContext } from 'react'
import ThemeContext from '../context/themeProvider'
import { Switch, Typography, AppBar, Toolbar, IconButton } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

import MenuIcon from '@mui/icons-material/Menu'
import SearchAppBar from './Search'
import { buttonStyle } from '../context/themeSetting'
import DrawerComponent from './DrawerComponent'

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const themeStyle = {
    ...buttonStyle.common,
    ...(theme === 'light' ? buttonStyle.light : buttonStyle.dark),
  }

  const handleThemeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <AppBar style={themeStyle} sx={{ padding: 1 }} position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start" aria-label="menu">
          <MenuIcon style={themeStyle} />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          Countries
        </Typography>
        <SearchAppBar />
        <IconButton
          size="large"
          edge="start"
          aria-label="menu"
          sx={{ margin: 2 }}
        >
          <DrawerComponent />
        </IconButton>

        <DarkModeIcon />
        <Switch onChange={handleThemeToggle} checked={theme === 'light'} />
        <LightModeIcon />
      </Toolbar>
    </AppBar>
  )
}

export default Header
