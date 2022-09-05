import React, { useContext, useState } from 'react'
import { Drawer, Button, Typography } from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import ThemeContext from '../context/themeProvider'
import {
  shoppingBasketStyle,
  buttonStyle,
  shoppingListtStyle,
} from '../context/themeSetting'
import { removeFromCart } from '../redux/slices/countriesSlice'

const DrawerComponent = () => {
  const [openDrawer, setOpenDrawer] = useState(false)

  const { countries } = useSelector((state: RootState) => state)
  const dispatch = useDispatch<AppDispatch>()

  const handleRemoveFromCart = (product: object) => {
    dispatch(removeFromCart(product))
  }

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

  const shopingListThemeStyle = {
    ...shoppingListtStyle.common,
    ...(theme === 'light' ? shoppingListtStyle.light : shoppingListtStyle.dark),
  }

  return (
    <React.Fragment>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <div style={shopingListThemeStyle}>
          <div
            className="Header"
            style={{
              margin: 'auto',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="h5" className="Heading" style={{}}>
              Shopping Cart
            </Typography>
            <Typography variant="h6" className="action">
              Remove all
            </Typography>
          </div>

          <ol style={{ padding: 100 }}>
            {countries.cartItems.map((country, index) => (
              <li key={index} style={{ padding: 10 }}>
                {country.flag} {country.name.common}
                <Button
                  variant="contained"
                  style={basketThemeStyle}
                  size="small"
                  onClick={() => {
                    handleRemoveFromCart(country)
                  }}
                >
                  Remove
                </Button>
              </li>
            ))}
          </ol>
        </div>
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
