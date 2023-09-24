import {createSlice} from '@reduxjs/toolkit'
import {IProduct} from '../../../types/productsTypes'

const initialState: {goods: IProduct[]} = {
  goods: [],
}

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProduct (state, action) {
      state.goods.push(action.payload)
    },
    removeProduct (state, action) {
      state.goods.splice(state.goods.findIndex((arrow) => arrow.id === action.payload), 1);
    },
    clearBasket (state) {
      state.goods = []
    }
  }
})

export const {addProduct, removeProduct, clearBasket} = basketSlice.actions

export const selectBasket = (state: {basket: {goods: IProduct[]}}) => state.basket.goods

export const basketReducer = basketSlice.reducer