import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { countriesFetch } from '../redux/slices/countriesSlice'

import { AppTheme } from '../context/AppTheme'
import ThemeContext from '../context/themeProvider'
import { AppDispatch, RootState } from '../redux/store'

export default function Home() {
  const dispatch = useDispatch<AppDispatch>()
  const state = useSelector((state: RootState) => state)
  console.log('state', state)
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
        {/* {products.length <= 0 && <div>No products in cart</div>}
        <ul>
          {products.map((p) => (
            <li key={p.id}>
              <Link to={`/products/${p.id}`}>{`${p.name} - $${p.price}`}</Link>
              <Button
                variant="outlined"
                color="error"
                onClick={() => dispatch(removeProduct(p))}
              >
                Remove
              </Button>
            </li>
          ))}
        </ul>
        <Button onClick={handleAddProduct} variant="contained">
          Add product
        </Button> */}
        <button onClick={() => dispatch(countriesFetch())}>Click Me</button>
      </div>
    </>
  )
}
