import { TbDatabaseX } from 'react-icons/tb'
import { getSearchedProducts } from '../../actions/product.actions'
import FilterComponent from '../../components/filtering/FilterComponent'
import ProductCard from '../../components/product/ProductCard'

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string }
}) {
  const search = searchParams.search
  const products = await getSearchedProducts(search)

  return (
    <main className='flex space-y-10 px-2 py-10 sm:px-0'>
      {products.length === 0 ? (
        <div className='w-full'>
          <h3 className='col-span-full flex flex-col items-center justify-center space-y-2 py-20 text-center text-xl font-medium text-gray-500'>
            <TbDatabaseX className='h-15 w-15' />
            <span>Search Not Found</span>
          </h3>
        </div>
      ) : (
        <>
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
        </>
      )}
    </main>
  )
}
