import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import countryReducer from './slices/countriesSlice'

export const store = configureStore({
  reducer: {
    countries: countryReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
