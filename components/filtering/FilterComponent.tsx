import Link from 'next/link'
import { getAllCategories } from '../../actions/product.actions'
import { SortButton } from '../Navigate-Query-Params/SortButton'
import { Separator } from '../ui/separator'

const FilterComponent = async () => {
  const categories = await getAllCategories()
  return (
    <aside className='hidden h-100 w-70 rounded-2xl px-3 py-8 lg:block'>
      <div>
        <h3 className='mb-2 text-sm font-bold uppercase'>Product categories</h3>
        <div className='flex flex-col'>
          {categories?.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.id}`}
              className='mb-2 text-sm text-gray-700 dark:text-gray-400'
            >
              {category.title}
            </Link>
          ))}
          <Separator className='my-4' />
          <div>
            <h3 className='mb-2 text-sm font-bold uppercase'>Sort By Price </h3>
            <SortButton value='asc'>Lower Price</SortButton>
            <SortButton value='desc'>Hihgest Price</SortButton>
          </div>
          
        </div>
      </div>
    </aside>
  )
}

export default FilterComponent
