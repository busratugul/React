import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import countryReducer from '../country/countrySlice'



export default configureStore({
  reducer: {
    abc: counterReducer,
    country: countryReducer
  },
})