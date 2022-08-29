import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export interface countriesState {
  value: number
}

const initialState: countriesState = {
  value: 0,
}

export const countriesFetch = createAsyncThunk(
  'countries/fetchCountries',
  async () => {
    const url = 'https://restcountries.com/v3.1/all'

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
    builder.addCase(countriesFetch.fulfilled, (state, action) => {
      console.log('action: ', action)
    })
  },
})

export default countriesSlice.reducer
