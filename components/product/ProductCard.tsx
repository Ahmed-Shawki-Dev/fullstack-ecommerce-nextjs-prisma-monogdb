'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { IProudct } from '../../interfaces/products'
import { addToCartAction } from '../../lib/features/cartSlice'

function ProductCard(product: IProudct) {
  const { thumbnail, title, description, linkUrl, price } = product
  const dispatch = useDispatch()
  return (
    <Card className='max-w-xs rounded-lg p-0'>
      <CardHeader className='flex justify-center p-0'>
        <Link href={linkUrl} passHref className='h-60 w-full overflow-hidden'>
          <Image
            src={thumbnail}
            alt={title}
            width={200}
            height={150}
            className='h-full w-full rounded-t-lg object-cover object-center'
          />
        </Link>
      </CardHeader>
      <CardContent className=''>
        <Link href={linkUrl} passHref>
          <h5 className='mb-1 text-lg font-semibold tracking-tight text-gray-900 dark:text-white'>
            {title}
          </h5>
        </Link>
        <p className='mb-2 text-sm text-gray-700 dark:text-gray-400'>
          {description}
        </p>
        <p className='mb-2 font-medium text-green-500'>{`$${price}`}</p>
      </CardContent>
      <CardFooter className='p-3 pt-0'>
        <Button
          size='sm'
          className='w-full'
          onClick={() => dispatch(addToCartAction({ ...product, qty: 1 }))}
        >
          Add To Cart
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ProductCard
