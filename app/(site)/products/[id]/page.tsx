import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getProduct } from '../../../../actions/product.actions'
import BackButton from '../../../../components/BackButton'
import AddToCartButton from '../../../../components/addToCartButton'


function isValidObjectId(id: string) {
  return /^[0-9a-fA-F]{24}$/.test(id)
}

export default async function Page({
  params,
}: {
  params: { id: string } | Promise<{ id: string }>
}) {
  const { id } = await params

  if (!isValidObjectId(id)) {
    notFound()
  }

  const product = await getProduct(id)

  if (!product) {
    notFound()
  }

  return (
    <main className='flex flex-col space-y-5 px-4 py-10 sm:px-0 lg:flex-row'>
      <div className='flex basis-1/2 flex-col space-y-5'>
        <BackButton />
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={500}
          height={500}
          className='rounded-xl'
        />
      </div>
      <div className='flex basis-1/2 flex-col justify-center space-y-2'>
        <p className='text-3xl font-bold'>{product.title}</p>
        <p className='text-md mb-2 text-gray-700 dark:text-gray-400'>
          {product.description}
        </p>
        <p className='mb-2 font-semibold text-green-500'>{`$${product.price === undefined ? '0' : new Intl.NumberFormat('en-US').format(product.price)}`}</p>
        <AddToCartButton product={product} />
      </div>
    </main>
  )
}
