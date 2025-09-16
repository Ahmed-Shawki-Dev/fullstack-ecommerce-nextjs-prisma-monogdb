import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { getProductsFromCategory } from '../../actions/product.actions'
import ProductCard from '../product/ProductCard'

export async function CategoriesSlider({ categoryId }: { categoryId: string }) {
  const products = await getProductsFromCategory(categoryId, 'asc', 10)

  return (
    <Carousel className='w-full'>
      <CarouselContent className='flex'>
        {products.map((product) => (
          <CarouselItem
            key={product.id}
            className='flex basis-full justify-center sm:basis-1/2 lg:basis-1/4  '
          >
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
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className='hidden lg:block'>
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  )
}
