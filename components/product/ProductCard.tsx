'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { toast } from 'sonner'
import { IProduct } from '../../interfaces'
import { useCartStore } from '../../store/cart.store'
import { trimText } from '../../utils'

function ProductCard(product: IProduct) {
  const { thumbnail, title, description, price, id } = product
  const addToCartDispatch = useCartStore((s) => s.addToCart)
  return (
    <Card className='p-0'>
      <CardContent className='p-2 md:p-3'>
        <div className='grid gap-4'>
          <Link href={`/products/${id}`} passHref>
            <Image
              src={thumbnail}
              alt='Sneakers'
              width={400}
              height={400}
              className='aspect-square overflow-hidden rounded-lg border object-cover '
            />
          </Link>
          <div className='grid gap-1.5'>
            <h3 className='text-lg font-bold'>{title}</h3>
            <p className='text-sm leading-none'>{trimText(description)}</p>
          </div>
          <div className='flex items-center justify-between'>
            <p className='font-bold text-green-500'>{`$${price === undefined ? '0' : new Intl.NumberFormat('en-US').format(price)}`}</p>
          </div>
        </div>
        <Button
          size='default'
          className='mt-2 w-full'
          onClick={() => {
            addToCartDispatch({ ...product, qty: 0 })
            toast.success('Product Added Successfully')
          }}
        >
          Add To Cart
        </Button>
      </CardContent>
    </Card>
  )
}

export default ProductCard
