export const revalidate = 3600

import { Suspense } from 'react'
import { getAllCategories } from '../../actions/product.actions'
import PosterSlider from '../../components/Posters/PosterSlider'
import Categories from '../../components/categoryComponents/Categories'
import CategorySliderSkeleton from '../../components/skeletons/CategorySliderSkeleton'
import CategoryProductsSection from '../../components/home/CategoryProductsSection'

export default async function Home() {
  const { categories } = await getAllCategories()

  return (
    <main className='w-full space-y-10 px-2 py-10 sm:px-0'>
      <PosterSlider />
      <Categories />
      <section className='flex flex-col items-center space-y-20'>
        {categories.map((category) => (
          <div
            key={category.id}
            className='mx-auto flex w-full flex-col items-center justify-center space-y-10'
          >
            <h3 className='text-center text-4xl font-semibold'>
              {category.title}
            </h3>

            <Suspense fallback={<CategorySliderSkeleton />}>
              <CategoryProductsSection categoryId={category.id} />
            </Suspense>
          </div>
        ))}
      </section>
    </main>
  )
}
