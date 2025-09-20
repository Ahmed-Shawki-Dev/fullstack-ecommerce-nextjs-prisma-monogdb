import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Eye } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { getAllCategories } from '../../../../actions/product.actions'
import Paginator from '../../../../components/paginator/Paginator'
import { Button } from '../../../../components/ui/button'
import DeleteCategory from './deleteCategory'
import EditCategoryModal from './editCategory'

export async function CategoriesTable({
  take,
  skip,
  search,
}: {
  take: number
  skip: number
  search: string
}) {
  const categories = await getAllCategories(take, skip, search)

  return (
    <Table>
      <TableCaption>
        <Paginator skip={skip} take={take} total={categories.total} />
      </TableCaption>
      <TableHeader>
        <TableRow className='font-bold uppercase'>
          <TableHead className='font-bold'>Thumbnail</TableHead>
          <TableHead className='font-bold'>Title</TableHead>
          <TableHead className='font-bold'>ID</TableHead>
          <TableHead className='text-right font-bold'>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categories.categories.map((category) => (
          <TableRow key={category.id}>
            <TableCell className='font-medium'>
              <Image
                src={category.thumbnail}
                alt={category.title}
                width={80}
                height={80}
              />
            </TableCell>
            <TableCell className='font-medium'>{category.title}</TableCell>
            <TableCell className='font-medium'>{category.id}</TableCell>

            <TableCell className='space-x-2 text-right'>
              <Link href={`/categories/${category.id}`} target='_blank'>
                <Button size={'icon'}>
                  <Eye />
                </Button>
              </Link>
              <EditCategoryModal category={category} id={category.id} />
              <DeleteCategory id={category.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
