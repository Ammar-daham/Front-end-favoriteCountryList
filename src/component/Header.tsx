import React, { useContext } from 'react'
import ThemeContext from '../context/themeProvider'
import {
  Switch,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Box,
} from '@mui/material'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

import MenuIcon from '@mui/icons-material/Menu'
import { AppTheme } from '../context/AppTheme'
import SearchAppBar from './Search'

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const headerStyle: AppTheme = {
    dark: {
      background: '#3f51b5',
      color: 'white',
    },
    light: {
      background: '#03a9f4',
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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={themeStyle} sx={{ padding: 1 }}>
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
            <ShoppingCartTwoToneIcon style={themeStyle} />
          </IconButton>
          <DarkModeIcon />
          <Switch onChange={handleThemeToggle} checked={theme === 'light'} />
          <LightModeIcon />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
