// lib/features/counter/counterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProudct } from '../../interfaces/products'
import { addToCart } from '../../utils'

export interface ICart extends IProudct {
  qty: number
}

interface IinitialState {
  cartItems: ICart[]
}

const initialState: IinitialState = {
  cartItems: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCartAction: (state, action: PayloadAction<ICart>) => {
      state.cartItems = addToCart(state.cartItems,action.payload)
    },
  },
})

export const { addToCartAction } = cartSlice.actions
export default cartSlice.reducer
