import { ICart } from '@/interfaces'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { addToCart as addToCartUtil } from '../utils'

interface IProps {
  cart: ICart[]
  addToCart: (product: ICart) => void
  removeFromCart: (productId: string) => void
  removeCartItems: () => void
}
export const useCartStore = create<IProps>()(
  devtools(
    persist(
      (set, get) => ({
        cart: [],
        addToCart: (product) => {
          const updatedCart = addToCartUtil(product, get().cart)
          set({ cart: updatedCart })
        },
        removeFromCart: (id) => {
          const filteredCart = get().cart.filter(
            (cartItem) => cartItem.id !== id,
          )
          set({ cart: filteredCart })
        },
        removeCartItems: () => {
          set({ cart: [] })
        },
      }),

      {
        name: `cart-guest`,
      },
    ),
  ),
)
