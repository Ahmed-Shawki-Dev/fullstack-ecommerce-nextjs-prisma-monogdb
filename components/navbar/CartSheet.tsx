'use client'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import Image from 'next/image'
import { Fragment, useState } from 'react'
import { FaCartPlus } from 'react-icons/fa'
import { useCartStore } from '../../store/cart.store'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import Cart from './Cart'

const CartSheet = () => {
  const cart = useCartStore((s) => s.cart)
  const removeFromCart = useCartStore((s) => s.removeFromCart)
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0)

  const [open, setOpen] = useState(false)
  return (
    <Sheet modal={false} open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Cart />
      </SheetTrigger>
      {open && (
        <div className='backdrop-blur-2xs fixed inset-0 z-40 bg-black/70' />
      )}
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Shopping cart</SheetTitle>
        </SheetHeader>
        {cart.length > 0 ? (
          cart.map((item) => {
            return (
              <Fragment key={item.id}>
                <div className='flex justify-between space-x-2 px-5'>
                  <div className='flex space-x-2'>
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      width={80}
                      height={80}
                    />
                    <div className='space-y-1'>
                      <div>{item.title}</div>
                      <div className='text-primary/70 text-sm font-light'>
                        Quantity: {item.qty}
                      </div>
                      <Button
                        size={'xs'}
                        variant={'outline'}
                        onClick={() => removeFromCart(item.id as string)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                  <div>
                    <div className='font-semibold text-green-500'>
                      $
                      {new Intl.NumberFormat('en-US').format(
                        item.price * item.qty,
                      )}
                    </div>
                  </div>
                </div>
                <Separator />
              </Fragment>
            )
          })
        ) : (
          <div className='flex h-full flex-col items-center justify-center space-y-5'>
            <FaCartPlus className='text-primary/30 h-20 w-40' />
            <div className='font-semibold'>No products in the cart.</div>
          </div>
        )}
        <SheetFooter className='ml-auto'>
          <p>
            Subtotal:{' '}
            <span className='font-semibold text-green-500'>
              ${new Intl.NumberFormat('en-US').format(totalPrice)}
            </span>
          </p>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default CartSheet
