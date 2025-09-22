import { Suspense } from 'react'
import { getAllCategories } from '../../../actions/product.actions'
import SuspenseLoader from '../../../components/ui/SuspenseLoader'
import AddProductModal from './addProduct'
import { ProductsTable } from './products-table'
import TableSearch from './table-search'

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>
}) {
  const categories = await getAllCategories()
  const sp = await searchParams
  const skippedItems = +sp.skip || 0
  const takedItems = +sp.take || 15
  const searchedItems = sp.search || ''
  return (
    <div>
      <div className='flex w-full'>
        <TableSearch text='/dashboard' />
        <AddProductModal categories={categories.categories} />
      </div>
      <h3 className='text-3xl font-bold'>Products</h3>
      <div className='container mx-auto py-10'>
        <Suspense fallback={<SuspenseLoader />}>
          <ProductsTable
            skip={skippedItems}
            take={takedItems}
            search={searchedItems}
          />
        </Suspense>
      </div>
    </div>
  )
}
