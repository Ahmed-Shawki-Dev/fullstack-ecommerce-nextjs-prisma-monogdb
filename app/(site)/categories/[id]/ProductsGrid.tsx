// ProductsGrid.tsx (Server Component)
import { getProductsFromCategory } from '@/actions/product.actions'
import ProductCard from '@/components/product/ProductCard'

export default async function ProductsGrid({
  id,
  sortOrder,
  takedItems,
  skippedItems,
}: {
  id: string
  sortOrder: 'asc' | 'desc'
  takedItems: number
  skippedItems: number
}) {
  const { products } = await getProductsFromCategory(
    id,
    sortOrder,
    takedItems,
    skippedItems,
  )

  return (
    <div className='grid flex-1 grid-cols-[repeat(auto-fill,minmax(300px,max-content))] justify-center gap-4'>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
          categoryId={product?.category.title}
        />
      ))}
    </div>
  )
}
