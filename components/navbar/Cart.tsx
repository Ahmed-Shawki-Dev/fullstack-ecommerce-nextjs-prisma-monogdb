'use client'

import { ShoppingCart } from 'lucide-react'
import { forwardRef, useEffect, useState } from 'react'
import { useCartStore } from '../../store/cart.store'
import { Button } from '../ui/button'

const Cart = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  const cart = useCartStore((s) => s.cart)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  return (
    <Button
      variant='ghost'
      className='flex items-center gap-1'
      ref={ref}
      {...props}
    >
      <ShoppingCart />
      {hydrated ? (
        <span >{cart.reduce((acc, item) => acc + item.qty, 0)}</span>
      ) : (
        <span className='h-4 w-4 animate-spin rounded-full bg-gray-300' />
      )}
    </Button>
  )
})

Cart.displayName = 'Cart'

export default Cart
