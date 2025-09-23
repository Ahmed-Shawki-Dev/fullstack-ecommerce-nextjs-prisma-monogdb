export const revalidate = 3600

import { notFound } from 'next/navigation'
import { Suspense } from 'react'

import {
  getCategory,
  getProductsFromCategory,
} from '../../../../actions/product.actions'
import FilterComponent from '../../../../components/filtering/FilterComponent'
import Paginator from '../../../../components/paginator/Paginator'
import SuspenseLoader from '../../../../components/ui/SuspenseLoader'
import ProductsGrid from './ProductsGrid'
import { Metadata } from 'next'

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).id

  const category = await getCategory(id)
  if (!category) return {}

  return {
    title: `hazTech | ${category.title}`,
    openGraph: {
      title: category.title,
      images: [{ url: category.thumbnail }],
    },
  }
}

export default async function Page({ params, searchParams }: Props) {
  const { id } = await params
  const sp = await searchParams
  const sortOrder = sp.sort === 'asc' || sp.sort === 'desc' ? sp.sort : 'asc'
  const skippedItems = +sp.skip || 0
  const takedItems = +sp.take || 15

  const category = await getCategory(id)
  const { total } = await getProductsFromCategory(
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
        <Suspense fallback={<SuspenseLoader />}>
          <ProductsGrid
            id={id}
            sortOrder={sortOrder}
            takedItems={takedItems}
            skippedItems={skippedItems}
          />
        </Suspense>
      </div>
      <div>
        <Paginator take={takedItems} skip={skippedItems} total={total} />
      </div>
    </main>
  )
}
