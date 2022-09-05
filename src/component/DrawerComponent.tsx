import React, { useContext, useState } from 'react'
import { Drawer, Button } from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import ThemeContext from '../context/themeProvider'
import { shoppingBasketStyle, buttonStyle } from '../context/themeSetting'

const DrawerComponent = () => {
  const [openDrawer, setOpenDrawer] = useState(false)

  const { countries } = useSelector((state: RootState) => state)

  const { theme } = useContext(ThemeContext)

  const lableThemeStyle = {
    ...shoppingBasketStyle.common,
    ...(theme === 'light'
      ? shoppingBasketStyle.light
      : shoppingBasketStyle.dark),
  }

  const basketThemeStyle = {
    ...buttonStyle.common,
    ...(theme === 'light' ? buttonStyle.light : buttonStyle.dark),
  }

  return (
    <React.Fragment>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <ol style={{ padding: 100 }}>
          {countries.cartItems.map((country, index) => (
            <li key={index}>
              {' '}
              {country.flag} {country.name.common}{' '}
              <Button variant="contained" style={basketThemeStyle}>
                Remove
              </Button>
            </li>
          ))}
        </ol>
      </Drawer>

      <ShoppingCartTwoToneIcon
        onClick={() => setOpenDrawer(!openDrawer)}
        sx={{ marginLeft: 'auto' }}
        style={basketThemeStyle}
      >
        <MenuIcon />
      </ShoppingCartTwoToneIcon>
      <span style={lableThemeStyle}>{countries.cartQuantity}</span>
    </React.Fragment>
  )
}

export default DrawerComponent
