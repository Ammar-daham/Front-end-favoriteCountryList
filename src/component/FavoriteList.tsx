import React, { useContext, useState } from 'react'
import {
  Drawer,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import MenuIcon from '@mui/icons-material/Menu'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import ThemeContext from '../context/themeProvider'
import {
  FavoriteIconStyle,
  buttonStyle,
  FavoriteListStyle,
  removeIconStyle,
} from '../context/themeSetting'
import {
  removeFromCart,
  removeAllCountries,
} from '../redux/slices/countriesSlice'

const FavoriteList = () => {
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
    ...FavoriteIconStyle.common,
    ...(theme === 'light' ? FavoriteIconStyle.light : FavoriteIconStyle.dark),
  }

  const basketThemeStyle = {
    ...buttonStyle.common,
    ...(theme === 'light' ? buttonStyle.light : buttonStyle.dark),
  }

  const favoriteListThemeStyle = {
    ...FavoriteListStyle.common,
    ...(theme === 'light' ? FavoriteListStyle.light : FavoriteListStyle.dark),
  }

  const removeIconThemeStyle = {
    ...removeIconStyle.common,
    ...(theme === 'light' ? removeIconStyle.light : removeIconStyle.dark),
  }

  return (
    <React.Fragment>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <div style={favoriteListThemeStyle}>
          <List style={{ width: '100%', maxWidth: '100%', height: '100%' }}>
            <ListItem>
              <ListItemText>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Favorite List
                </Typography>
              </ListItemText>
              {countries.cartItems && countries.cartItems.length > 0 ? (
                <DeleteIcon
                  style={removeIconThemeStyle}
                  onClick={() => {
                    handleRemoveAll(countries.cartItems)
                  }}
                />
              ) : null}
            </ListItem>
            <Divider style={basketThemeStyle} />
            {countries.cartItems.map((country, index) => (
              <ListItem key={index}>
                <ListItemAvatar style={{ fontSize: '30px' }}>
                  {country.flag}
                </ListItemAvatar>
                <ListItemText>
                  <Typography>{country.name.common}</Typography>
                </ListItemText>
                <DeleteIcon
                  style={removeIconThemeStyle}
                  onClick={() => {
                    handleRemoveFromCart(country)
                  }}
                />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>

      <FavoriteIcon
        onClick={() => setOpenDrawer(!openDrawer)}
        sx={{ marginLeft: 'auto' }}
        style={basketThemeStyle}
      >
        <MenuIcon />
      </FavoriteIcon>
      <span style={lableThemeStyle}>{countries.cartQuantity}</span>
    </React.Fragment>
  )
}

export default FavoriteList
