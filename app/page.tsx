import { getAllCategories } from '../actions/product.actions'
import Categories from '../components/categoryComponents/Categories'
import { CategoriesSlider } from '../components/CategorySlidersComponent/CategoriesSliderHomePage'
import Paginator from '../components/paginator/Paginator'
import PosterSlider from '../components/Posters/PosterSlider'
export default async function Home() {
  const categories = await getAllCategories()

  return (
    <main className='w-full space-y-10 px-2 py-10 sm:px-0'>
      <Paginator />
      <PosterSlider />
      <Categories />
      <section className='flex flex-col items-center space-y-20'>
        {categories.map((category) => {
          return (
            <div
              key={category.id}
              className='mx-auto flex w-full flex-col items-center justify-center space-y-10'
            >
              <h3 className='text-center text-4xl font-semibold'>
                {category.title}
              </h3>
              <CategoriesSlider categoryId={category.id} />
            </div>
          )
        })}
      </section>
    </main>
  )
}
