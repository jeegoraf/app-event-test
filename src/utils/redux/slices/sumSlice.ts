import {createSlice} from "@reduxjs/toolkit"

const initialState = {sum: 0}

const sumSlice = createSlice({
  name: 'sum',
  initialState,
  reducers: {
    incPrice (state, action) {
      state.sum += action.payload
    },
    decPrice (state, action) {
      state.sum -= action.payload
    },
    resetPrice (state) {
      state.sum = 0
    }
  }
})

export const {incPrice, decPrice, resetPrice} = sumSlice.actions

export const selectTotalPrice = (state: {sum: {sum: number}}) => state.sum

export const sumReducer = sumSlice.reducer