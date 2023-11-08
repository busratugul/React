import { createSlice } from '@reduxjs/toolkit'
import CourseItems from '../../CourseItems'

const initialState = {
  cardItems: CourseItems,
  quantity: 4,
  total: 0,
}

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    clearCard: (state) => {
      state.cardItems = []
    },
    removeItem: (state, action) => {
      console.log(action)
      const itemID = action.payload
      state.cardItems = state.cardItems.filter((item) => item.id !== itemID)
    },
    increaseItem: (state, action) => {
      const cardItem = state.cardItems.find(
        (item) => item.id === action.payload
      )
      cardItem.quantity += 1
    },
    decreaseItem: (state, action) => {
      const cardItem = state.cardItems.find(
        (item) => item.id === action.payload
      )
      if (cardItem.quantity > 0) {
        cardItem.quantity -= 1
      }
    },
    calculateItem: (state) => {
      let total = 0
      let quantityTotal = 0
      state.cardItems.forEach((item) => {
        total += item.quantity * item.price
        quantityTotal += item.quantity
      })
      state.quantity = quantityTotal
      state.total = total
    },
  },
})

console.log(initialState.cardItems)

export const {
  clearCard,
  removeItem,
  increaseItem,
  decreaseItem,
  calculateItem,
} = cardSlice.actions
export default cardSlice.reducer
