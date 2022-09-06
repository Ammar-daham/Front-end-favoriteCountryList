import React, { useContext, useState } from 'react'
import {
  Drawer,
  Button,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import ThemeContext from '../context/themeProvider'
import {
  shoppingBasketStyle,
  buttonStyle,
  shoppingListStyle,
} from '../context/themeSetting'
import {
  removeFromCart,
  removeAllCountries,
} from '../redux/slices/countriesSlice'

const ShoppingList = () => {
  const [openDrawer, setOpenDrawer] = useState(false)

  const { countries } = useSelector((state: RootState) => state)
  const dispatch = useDispatch<AppDispatch>()

  const handleRemoveFromCart = (country: object) => {
    dispatch(removeFromCart(country))
  }

  const handleRemoveAll = (allCountries: object) => {
    dispatch(removeAllCountries(allCountries))
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
    ...shoppingListStyle.common,
    ...(theme === 'light' ? shoppingListStyle.light : shoppingListStyle.dark),
  }

  return (
    <React.Fragment>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <div style={shopingListThemeStyle}>
          <List style={{ width: '100%', maxWidth: '100%', height: '100%' }}>
            <ListItem>
              <ListItemText>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Shopping Cart
                </Typography>
              </ListItemText>
              {countries.cartItems.length > 0 ? (
                <Button
                  sx={{ marginLeft: '250px' }}
                  variant="contained"
                  style={basketThemeStyle}
                  size="small"
                  onClick={() => {
                    handleRemoveAll(countries.cartItems)
                  }}
                >
                  Remove All
                </Button>
              ) : null}
            </ListItem>
            <Divider />
            {countries.cartItems.map((country, index) => (
              <ListItem key={index}>
                <ListItemAvatar style={{ fontSize: '50px' }}>
                  {country.flag}
                </ListItemAvatar>
                <ListItemText>
                  <Typography>{country.name.common}</Typography>
                </ListItemText>
                <Button
                  sx={{ marginLeft: '250px' }}
                  variant="contained"
                  style={basketThemeStyle}
                  size="small"
                  onClick={() => {
                    handleRemoveFromCart(country)
                  }}
                >
                  Remove
                </Button>
              </ListItem>
            ))}
          </List>
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

export default ShoppingList
