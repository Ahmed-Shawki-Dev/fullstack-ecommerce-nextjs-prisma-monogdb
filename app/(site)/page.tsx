export const revalidate = 3600
import {
  getAllCategories,
  getProductsFromCategory,
} from '../../actions/product.actions'
import Categories from '../../components/categoryComponents/Categories'
import { CategoriesSlider } from '../../components/CategorySlidersComponent/CategoriesSliderHomePage'
import PosterSlider from '../../components/Posters/PosterSlider'

export default async function Home() {
  const categoriesData = await getAllCategories()

  const productPromises = categoriesData.categories.map((category) =>
    getProductsFromCategory(category.id, 'asc', 10),
  )

  const allProductsData = await Promise.all(productPromises)

  return (
    <main className='w-full space-y-10 px-2 py-10 sm:px-0'>
      <PosterSlider />
      <Categories />
      <section className='flex flex-col items-center space-y-20'>
        {categoriesData.categories.map((category, index) => {
          const productsForCategory = allProductsData[index].products
          return (
            <div
              key={category.id}
              className='mx-auto flex w-full flex-col items-center justify-center space-y-10'
            >
              <h3 className='text-center text-4xl font-semibold'>
                {category.title}
              </h3>
              <CategoriesSlider products={productsForCategory} />
            </div>
          )
        })}
      </section>
    </main>
  )
}
