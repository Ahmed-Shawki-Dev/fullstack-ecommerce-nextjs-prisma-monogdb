'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { IProduct } from '../../interfaces/products'
import { Badge } from '../ui/badge'

function ProductCard(product: IProduct) {
  const { thumbnail, title, description, linkUrl, price, category } = product
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
        <div className='flex items-center justify-between'>
          <p className='mb-2 font-medium text-green-500'>{`$${price === undefined ? '0' : price}`}</p>
          <Badge asChild className='rounded-full' variant={'outline'}>
            <p>{category}</p>
          </Badge>
        </div>
      </CardContent>
      <CardFooter className='p-3 pt-0'>
        <Button size='sm' className='w-full'>
          Add To Cart
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ProductCard
