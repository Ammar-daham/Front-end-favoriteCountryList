import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { Country } from '../../types'

export interface countriesState {
  countriesRef: Country[]
  items: Country[]
  isLoading: boolean
  error: string
  cartItems: Country[]
  cartQuantity: number
}

const initialState: countriesState = {
  countriesRef: [],
  items: [],
  isLoading: false,
  error: '',
  cartItems: [],
  cartQuantity: 0,
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
      const items = state.cartItems.find(
        (item) => item.name.common === action.payload.name.common
      )
      if (!items) {
        state.cartQuantity = state.cartQuantity + 1
        state.cartItems = [...state.cartItems, action.payload]
      }
      state.cartItems = [...state.cartItems]
    },

    removeFromCart: (state, action) => {
      const filteredItems = state.cartItems.filter(
        (country) => country.name.common !== action.payload.name.common
      )
      state.cartItems = filteredItems
      if (state.cartQuantity !== 0) state.cartQuantity = state.cartQuantity - 1
      else state.cartQuantity = 0
    },

    removeAllCountries: (state, action) => {
      const filteredItems = state.cartItems.filter(
        (country) => country === action.payload
      )
      state.cartItems = filteredItems
      state.cartQuantity = 0
    },

    sortNames: (state, action) => {
      const list = action.payload.items.map((country: object) => {
        return country
      })
      const sortedCountries = list.sort((a: any, b: any) =>
        a.name.common > b.name.common ? 1 : -1
      )
      state.items = sortedCountries
    },
  },

  extraReducers: (builder) => {
    builder.addCase(countriesFetch.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(countriesFetch.fulfilled, (state, action) => {
      state.items = action.payload.data
      state.countriesRef = action.payload.data
      state.isLoading = false
    })
    builder.addCase(countriesFetch.rejected, (state) => {
      console.log('Something went wrong')
      state.isLoading = false
    })
  },
})

export const {
  handleSearchBy,
  addToCart,
  removeFromCart,
  removeAllCountries,
  sortNames,
} = countriesSlice.actions
export default countriesSlice.reducer
