import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { Country } from '../../types'

export interface countriesState {
  countriesRef: Country[]
  items: Country[]
  isLoading: boolean
  error: ''
}

const initialState: countriesState = {
  countriesRef: [],
  items: [],
  isLoading: false,
  error: '',
}

// const init = {
//   name: {
//     common: ''
//   },
//   capital: [],
//   languages: {

//   },
//   population: 0,
//   region: '',
//   flag: ''
// }

export const countriesFetch = createAsyncThunk(
  'countries/fetchCountries',
  async () => {
    const url = `https://restcountries.com/v3.1/all?fields=name,languages,capital,flag,population,region`

    const response = await axios.get(url)
    //console.log('response: ', response)
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
      console.log('action: ', action.payload)
      const searchBy = action.payload.toLowerCase()
      const filteredCountries = state.countriesRef.filter((country) => {
        const name = country.name.common.toLowerCase()
        if (name.startsWith(searchBy)) {
          return country
        }
        return false
      })
      console.log('filter', filteredCountries)
      state.items = filteredCountries
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

export const { handleSearchBy } = countriesSlice.actions
export default countriesSlice.reducer
