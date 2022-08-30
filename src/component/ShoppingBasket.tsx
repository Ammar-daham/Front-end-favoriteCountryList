import React from 'react'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone'
import { IconButton } from '@mui/material'

const ShoppingBasket = () => {
  return (
    <IconButton size="large" edge="start" aria-label="menu" sx={{ margin: 1 }}>
      <ShoppingCartTwoToneIcon />
    </IconButton>
  )
}

export default ShoppingBasket
