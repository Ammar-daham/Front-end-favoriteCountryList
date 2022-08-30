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

import MenuIcon from '@mui/icons-material/Menu'
import { AppTheme } from '../context/AppTheme'
import SearchAppBar from './Search'
import ShoppingBasket from './ShoppingBasket'

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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={themeStyle} sx={{ padding: 1 }}>
        <Toolbar>
          <IconButton size="large" edge="start" aria-label="menu">
            <MenuIcon />
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
          <ShoppingBasket />
          <Switch onChange={handleThemeToggle} checked={theme === 'light'} />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
