import { toast } from 'sonner'
import { ICart, IProduct } from '../interfaces/products'

export const addToCart = (cartItems: ICart[], newItem: IProduct): ICart[] => {
  const exists = cartItems.find((item) => item.id === newItem.id)

  if (exists) {
    toast.success('Added To Your Cart.')
    return cartItems.map((item) =>
      item.id === newItem.id ? { ...item, qty: item.qty + 1 } : item,
    )
  }

  toast.success('Added To Your Cart Successfully')
  return [...cartItems, { ...(newItem as unknown as ICart), qty: 1 }]
}
