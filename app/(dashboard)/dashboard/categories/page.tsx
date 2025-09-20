import { Suspense } from 'react'
import SuspenseLoader from '../../../../components/ui/SuspenseLoader'
import TableSearch from '../table-search'
import { CategoriesTable } from './categories-table'
import AddCategoryModal from './addCategory'

export default async function Page({
  searchParams,
}: {
  params: { id: string } | Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string }>
}) {
  const sp = await searchParams
  const skippedItems = +sp.skip || 0
  const takedItems = +sp.take || 15
  const searchedItems = sp.search || ''
  return (
    <div>
      <div className='flex w-full'>
        <TableSearch text='/dashboard/categories' />
        <AddCategoryModal/>
      </div>
      <h3 className='text-3xl font-bold'>Categories</h3>

      <div className='container mx-auto py-10'>
        <Suspense fallback={<SuspenseLoader />}>
          <CategoriesTable
            skip={skippedItems}
            take={takedItems}
            search={searchedItems}
          />
        </Suspense>
      </div>
    </div>
  )
}
