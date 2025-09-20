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
import Link from 'next/link'
import {
  getAllCategories,
  getAllProductsAction,
} from '../../../actions/product.actions'
import Paginator from '../../../components/paginator/Paginator'
import { Button } from '../../../components/ui/button'
import DeleteProduct from './deleteProduct'
import EditProductModal from './editProduct'
import Image from 'next/image'

export async function ProductsTable({
  take,
  skip,
  search,
}: {
  take: number
  skip: number
  search: string
}) {
  const categories = await getAllCategories()

  const { products, total } = await getAllProductsAction(take, skip, search)
  return (
    <Table>
      <TableCaption>
        <Paginator skip={skip} take={take} total={total} />
      </TableCaption>
      <TableHeader>
        <TableRow className='uppercase'>
          <TableHead className='font-bold'>Thumbnail</TableHead>
          <TableHead className='font-bold'>Title</TableHead>
          <TableHead className='font-bold'>Price</TableHead>
          <TableHead className='font-bold'>Amount</TableHead>
          <TableHead className='text-right font-bold'>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell className='font-medium'>
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={80}
                height={80}
              />
            </TableCell>
            <TableCell className='font-medium'>{product.title}</TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell>{product.stock}</TableCell>
            <TableCell className='space-x-2 text-right'>
              <Link href={`/products/${product.id}`} target='_blank'>
                <Button size={'icon'}>
                  <Eye />
                </Button>
              </Link>
              <EditProductModal
                categories={categories.categories}
                product={product}
              />
              <DeleteProduct id={product.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
