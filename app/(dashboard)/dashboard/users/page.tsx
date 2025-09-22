import { Suspense } from 'react'
import SuspenseLoader from '../../../../components/ui/SuspenseLoader'
import TableSearch from '../table-search'
import { UsersTable } from './users-table'


export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>
}) {
  const sp = await searchParams
  const skippedItems = +sp.skip || 0
  const takedItems = +sp.take || 15
  const searchedItems = sp.search || ''
  return (
    <div>
      <div className='flex w-full'>
        <TableSearch text='/dashboard/users' />
      </div>
      <h3 className='text-3xl font-bold'>Users</h3>

      <div className='container mx-auto py-10'>
        <Suspense fallback={<SuspenseLoader />}>
          <UsersTable
            skip={skippedItems}
            take={takedItems}
            search={searchedItems}
          />
        </Suspense>
      </div>
    </div>
  )
}
