import { createSlice } from '@reduxjs/toolkit'

export interface countriesState {
  value: number
}

const initialState: countriesState = {
  value: 0,
}

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
  },
})

export const { increment } = countriesSlice.actions
export default countriesSlice.reducer
