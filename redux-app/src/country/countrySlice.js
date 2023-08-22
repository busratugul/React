import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'

export const getCountry = createAsyncThunk('getCountry',async () => {
    const response = await axios.get('https://restcountries.com/v3.1/all')
    const data = response.data
    return data
})


export const countrySlice = createSlice({
    name: "country",
    initialState: {
        value: [],
        loading: false
},
reducers:{

},
extraReducers: (builder) => {
    builder.addCase(getCountry.fulfilled,(state, action) => {
        state.country= action.payload
        state.loading = false
})

    builder.addCase(getCountry.pending,(state, action) => {
        state.loading = true
    })
  }
})


export default countrySlice.reducer