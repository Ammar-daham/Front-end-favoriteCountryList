import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { Country } from '../../types'

export interface countriesState {
  countriesRef: Country[]
  items: Country[]
  isLoading: boolean
  error: ''
  cartItems: Country[]
  productQuantity: number
}

const initialState: countriesState = {
  countriesRef: [],
  items: [],
  isLoading: false,
  error: '',
  cartItems: [],
  productQuantity: 0,
}

export const countriesFetch = createAsyncThunk(
  'countries/fetchCountries',
  async () => {
    const url = `https://restcountries.com/v3.1/all?fields=name,languages,capital,flag,population,region,area`

    const response = await axios.get(url)
    return {
      data: response.data,
      status: response.status,
    }
  }
)

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    handleSearchBy: (state, action) => {
      const searchBy = action.payload.toLowerCase()
      const filteredCountries = state.countriesRef.filter((country) => {
        const name = country.name.common.toLowerCase()
        if (name.startsWith(searchBy)) {
          return state.items.push(action.payload)
        }
        return false
      })
      state.items = filteredCountries
    },

    addToCart: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.name.common === action.payload.name.common
      )
      if (!item) {
        state.productQuantity = state.productQuantity + 1
        state.cartItems = [...state.cartItems, action.payload]
      }
      state.cartItems = [...state.cartItems]
    },
  },

  extraReducers: (builder) => {
    builder.addCase(countriesFetch.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(countriesFetch.fulfilled, (state, action) => {
      state.items = action.payload.data
      state.countriesRef = action.payload.data
      state.isLoading = false
    })
    builder.addCase(countriesFetch.rejected, (state, action) => {
      console.log('Something went wrong')
      state.isLoading = false
    })
  },
})

export const { handleSearchBy, addToCart } = countriesSlice.actions
export default countriesSlice.reducer
