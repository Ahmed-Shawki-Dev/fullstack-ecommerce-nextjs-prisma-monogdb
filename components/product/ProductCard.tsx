'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { IProduct } from '../../interfaces/products'
import { useCartStore } from '../../store/cart.store'
import { Badge } from '../ui/badge'

function ProductCard(product: IProduct) {
  const { thumbnail, title, description, price, categoryId, id } = product
  const addToCartDispatch = useCartStore((s) => s.addToCart)
  return (
    <Card className='max-w-xs rounded-lg p-0'>
      <CardHeader className='flex justify-center p-0'>
        <Link
          href={`/products/${id}`}
          passHref
          className='h-60 w-full overflow-hidden rounded-t-lg'
        >
          <Image
            src={thumbnail}
            alt={title}
            width={200}
            height={150}
            className='h-full w-full rounded-t-lg object-cover object-center transition-transform hover:scale-110'
          />
        </Link>
      </CardHeader>
      <CardContent className=''>
        <Link href={`/products/${id}`} passHref>
          <h5 className='mb-1 text-lg font-semibold tracking-tight text-gray-900 dark:text-white'>
            {title}
          </h5>
        </Link>
        <p className='mb-2 text-sm text-gray-700 dark:text-gray-400'>
          {description}
        </p>
        <div className='flex items-center justify-between'>
          <p className='mb-2 font-semibold text-green-500'>{`$${price === undefined ? '0' : new Intl.NumberFormat('en-US').format(price)}`}</p>
          <Badge asChild className='rounded-full' variant={'outline'}>
            <p>{categoryId}</p>
          </Badge>
        </div>
      </CardContent>
      <CardFooter className='p-3 pt-0'>
        <Button
          size='sm'
          className='w-full'
          onClick={() => addToCartDispatch({ ...product, qty: 0 })}
        >
          Add To Cart
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ProductCard
