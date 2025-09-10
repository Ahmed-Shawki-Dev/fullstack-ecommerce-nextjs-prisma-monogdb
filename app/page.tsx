import { getAllProductsAction } from '../actions/product.actions'
import ProductCard from '../components/product/ProductCard'
export default async function Home() {
  const products = await getAllProductsAction()
  return (
    <div className='grid grid-cols-[repeat(auto-fill,minmax(300px,max-content))] justify-center gap-4 pt-20 md:justify-start'>
      <ProductCard
        thumbnail={'/img.png'}
        title={products[0].title}
        description={products[0].description}
        linkUrl={'/'}
        price={products[0].price}
        stock={products[0].stock}
      />
    </div>
  )
}
