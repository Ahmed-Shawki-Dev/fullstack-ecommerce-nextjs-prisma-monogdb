import { notFound } from 'next/navigation'
import {
  getCategory,
  getProductsFromCategory,
} from '../../../actions/product.actions'
import FilterComponent from '../../../components/filtering/FilterComponent'
import ProductCard from '../../../components/product/ProductCard'

export default async function Page({
  params,
  searchParams,
}: {
  params: { id: string } | Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string }>
}) {
  const { id } = await params
  const sp = await searchParams
  const sortOrder = sp.sort === 'asc' || sp.sort === 'desc' ? sp.sort : 'asc'

  const category = await getCategory(id)
  const products = await getProductsFromCategory(id, sortOrder)
  if (!category) {
    notFound()
  }
  return (
    <main className='flex space-y-10 px-2 py-10 sm:px-0'>
      <FilterComponent />
      <div className='grid flex-1 grid-cols-[repeat(auto-fill,minmax(300px,max-content))] justify-center gap-4'>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            thumbnail={product.thumbnail}
            title={product?.title}
            description={product?.description}
            price={product?.price}
            stock={product?.stock}
            categoryId={product?.category.title}
            id={product?.id}
          />
        ))}
      </div>
    </main>
  )
}
