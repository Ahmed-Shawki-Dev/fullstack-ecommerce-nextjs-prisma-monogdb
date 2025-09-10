'use client'
import { ShoppingCart } from 'lucide-react'
import { useSelector } from 'react-redux'
import { RootState } from '../../lib/store'

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems)

  return (
    <div className='flex'>
      <ShoppingCart /> ({cartItems.length})
    </div>
  )
}

export default Cart
