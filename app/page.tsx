import { getAllProductsAction } from '../actions/product.actions'
import ProductCard from '../components/product/ProductCard'
export default async function Home() {
  const products = await getAllProductsAction()
  return (
    <div className='grid grid-cols-[repeat(auto-fill,minmax(300px,max-content))] justify-center gap-4 pt-20'>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          thumbnail={product.thumbnail}
          title={product?.title}
          description={product?.description}
          linkUrl={'/'}
          price={product?.price}
          stock={product?.stock}
          category={product?.category.title}
        />
      ))}
    </div>
  )
}
