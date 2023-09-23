import {createSlice} from '@reduxjs/toolkit'
import {IProduct} from '../../../types/productsTypes'

const initialState: {goods: IProduct[]} = {
  goods: []
}

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProduct (state, action) {
      state.goods.push(action.payload)
    },
    removeProduct (state, action) {
      state.goods = state.goods.filter(item => {
        item.id === action.payload.id
      })
    },
    clearBasket (state) {
      state.goods = []
    }
  }
})

export const {addProduct, removeProduct, clearBasket} = basketSlice.actions

export const basketReducer = basketSlice.reducer