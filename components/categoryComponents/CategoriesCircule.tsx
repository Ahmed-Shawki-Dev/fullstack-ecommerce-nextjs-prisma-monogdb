import Image from 'next/image'
import Link from 'next/link'
import { ICategory } from '../../interfaces'

const CategoriesCircule = ({ category }: { category: ICategory }) => {
  return (
    <Link
      href={`/categories/${category.id}`}
      className='flex flex-col items-center justify-center space-y-4'
    >
      <div className='h-36 w-36 rounded-xl bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 p-[3px] transition-transform hover:scale-105'>
        <div className='bg-background h-full w-full overflow-hidden rounded-xl'>
          <Image
            src={category.thumbnail}
            alt={category.title}
            width={150}
            height={150}
            className='h-full w-full object-cover select-none'
          />
        </div>
      </div>
      <h3 className='text-lg font-medium tracking-wide uppercase'>
        {category.title}
      </h3>
    </Link>
  )
}

export default CategoriesCircule
