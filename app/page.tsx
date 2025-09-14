import { getAllProductsAction } from '../actions/product.actions'
import ProductCard from '../components/product/ProductCard'
export default async function Home() {
  const products = await getAllProductsAction()
  console.log(products)
  return (
    <main className='grid grid-cols-[repeat(auto-fill,minmax(300px,max-content))] justify-center gap-4 px-2 py-10 sm:px-0'>
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
    </main>
  )
}
