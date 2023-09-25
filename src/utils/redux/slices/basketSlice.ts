import {createSlice} from '@reduxjs/toolkit'
import {IProduct} from '../../../types/productsTypes'

const initialState: {goods: IProduct[], totalPrice: number} = {
  goods: [],
  totalPrice: 0
}

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProduct (state, action) {
      state.goods.push(action.payload)
      state.totalPrice += action.payload.price
    },
    removeProduct (state, action) {
      state.goods.splice(state.goods.findIndex((arrow) => arrow.id === action.payload.id), 1);
      state.totalPrice -= action.payload.price
    },
    clearBasket (state) {
      state.goods = []
      state.totalPrice = 0
    }
  }
})

export const {addProduct, removeProduct, clearBasket} = basketSlice.actions

export const selectBasket = (state: {basket: typeof initialState}) => state.basket.goods

export const selectTotalPrice = (state: {basket: typeof initialState}) => state.basket.totalPrice

export const basketReducer = basketSlice.reducer