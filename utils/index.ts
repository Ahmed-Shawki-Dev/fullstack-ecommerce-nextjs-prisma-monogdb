import { toast } from 'sonner'
import { IProudct } from '../interfaces/products'
import { ICart } from '../lib/features/cartSlice'

export const addToCart = (cartItems: ICart[], newItem: IProudct): ICart[] => {
  const exists = cartItems.find((item) => item.id === newItem.id)
  if (exists) {
    toast('Added To Your Cart.')
    return cartItems.map((item) =>
      item.id === newItem.id ? { ...item, qty: item.qty + 1 } : item,
    )
  }
  toast('Added To Your Cart Successfully')
  return [...cartItems, { ...newItem, qty: 1 }]
}
