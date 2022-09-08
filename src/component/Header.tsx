import React, { useContext } from 'react'
import ThemeContext from '../context/themeProvider'
import { Link } from 'react-router-dom'
import { Switch, Typography, AppBar, Toolbar, IconButton } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import SearchAppBar from './Search'
import { buttonStyle } from '../context/themeSetting'
import FavoriteList from './FavoriteList'
import globleImg from '../img/global.png'

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
        <Link to={`/`}>
          <img src={globleImg} style={{ width: 50 }} alt="globle" />
        </Link>

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
          <FavoriteList />
        </IconButton>

        <DarkModeIcon />
        <Switch onChange={handleThemeToggle} checked={theme === 'light'} />
        <LightModeIcon />
      </Toolbar>
    </AppBar>
  )
}

export default Header
