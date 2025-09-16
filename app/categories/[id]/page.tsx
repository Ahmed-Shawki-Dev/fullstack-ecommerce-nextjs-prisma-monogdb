import { notFound } from 'next/navigation'
import {
  getCategory,
  getProductsFromCategory,
} from '../../../actions/product.actions'
import FilterComponent from '../../../components/filtering/FilterComponent'
import Paginator from '../../../components/paginator/Paginator'
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
  const skippedItems = +sp.skip || 0
  const takedItems = +sp.take || 15

  const category = await getCategory(id)
  const {products,total} = await getProductsFromCategory(
    id,
    sortOrder,
    takedItems,
    skippedItems,
  )
  console.log(total)
  if (!category) {
    notFound()
  }
  return (
    <main className='flex flex-col space-y-10 px-2 py-10 sm:px-0'>
      <div className='flex w-full'>
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
      </div>
      <div>
        <Paginator take={takedItems} skip={skippedItems} total={total}/>
      </div>
    </main>
  )
}
