import { getAllCategories } from '../../actions/product.actions'
import CategoriesCircule from './CategoriesCircule'

const Categories = async () => {
  const categories = await getAllCategories()
  return (
    <section className='w-full space-y-10  py-10 rounded-xl'>
      <h3 className='text-center text-4xl font-semibold'>Categories</h3>
      <div className='flex w-full flex-wrap items-center justify-center gap-4'>
        {categories.length > 0 ? (
          categories.map((category) => (
            <CategoriesCircule category={category} key={category.id} />
          ))
        ) : (
          <p>Empty...</p>
        )}
      </div>
    </section>
  )
}

export default Categories
