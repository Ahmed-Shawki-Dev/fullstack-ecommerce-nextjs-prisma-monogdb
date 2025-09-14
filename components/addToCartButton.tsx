'use client'
import { useCartStore } from '../store/cart.store'
import { Button } from './ui/button'

const AddToCartButton = ({
  product,
}: {
  product: {
    id: string
    title: string
    description: string
    thumbnail: string
    price: number
    stock: number
    createdAt: Date
    updatedAt: Date
    categoryId: string
  }
}) => {
  const addToCartDispatch = useCartStore((s) => s.addToCart)

  return (
    <Button
      size='lg'
      className='w-fit'
      onClick={() => addToCartDispatch({ ...product, qty: 0 })}
    >
      Add To Cart
    </Button>
  )
}

export default AddToCartButton
