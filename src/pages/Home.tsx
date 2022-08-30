import React, { useContext } from 'react'

import { AppTheme } from '../context/AppTheme'
import ThemeContext from '../context/themeProvider'

import { CountriesTable } from '../component/Table'

export default function Home() {
  // console.log('state', state)
  // const products = useSelector((state: AppState) => state.product.inCart)

  // const handleAddProduct = () => {
  //   const product: Product = {
  //     id: (+new Date()).toString(),
  //     name: names[Math.floor(Math.random() * names.length)],
  //     price: +(Math.random() * 10).toFixed(2),
  //   }
  //   dispatch(addProduct(product))
  // }

  const { theme } = useContext(ThemeContext)

  const headerStyle: AppTheme = {
    dark: {
      background: '#37474F',
      color: '#DEE4E7',
    },
    light: {
      background: '#F5F5F5',
      color: '#222222',
    },
    common: {
      transition: 'all 1s ease',
      padding: 50,
    },
  }

  const themeStyle = {
    ...headerStyle.common,
    ...(theme === 'light' ? headerStyle.light : headerStyle.dark),
  }

  return (
    <>
      <div style={themeStyle}>
        <h1>Home page</h1>
        <CountriesTable />
      </div>
    </>
  )
}
