import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { Country } from '../../types'

export interface countriesState {
  items: Country[]
  isLoading: boolean
}

const initialState: countriesState = {
  items: [],
  isLoading: false,
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
    console.log('response: ', response.data)
    return {
      data: response.data,
      status: response.status,
    }
  }
)

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(countriesFetch.pending, (state, action) => {
      console.log('action: ', action)
      state.isLoading = true
    })
    builder.addCase(countriesFetch.fulfilled, (state, action) => {
      console.log('action: ', action)
      state.items = action.payload.data
      state.isLoading = false
    })
  },
})

export default countriesSlice.reducer
