import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  getAllCategories,
  getAllProductsAction,
} from '../actions/product.actions'
import { getAllUsersAction } from '../actions/user.actions'

export async function SectionCards() {
  const [usersPromise, productsPromise, categoriesPromise] = await Promise.all([
    getAllUsersAction(),
    getAllProductsAction(),
    getAllCategories(),
  ])
  const { total: totalUsers } = usersPromise
  const { total: totalProducts } = productsPromise
  const { total: totalCategories } = categoriesPromise
  return (
    <div className='flex flex-col space-y-2 space-x-2'>
      <div>
        <Card className='h-60 w-full'>
          <CardHeader>
            <CardDescription>Total Users</CardDescription>
            <CardTitle className='text-2xl font-semibold tabular-nums @[250px]/card:text-3xl'>
              {totalUsers}
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
      <div className='flex flex-col space-y-2 space-x-2 lg:flex-row lg:space-y-0'>
        <Card className='h-60 w-full'>
          <CardHeader>
            <CardDescription>Total Products</CardDescription>
            <CardTitle className='text-2xl font-semibold tabular-nums @[250px]/card:text-3xl'>
              {totalProducts}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card className='h-60 w-full'>
          <CardHeader>
            <CardDescription>Total Categories</CardDescription>
            <CardTitle className='text-2xl font-semibold tabular-nums @[250px]/card:text-3xl'>
              {totalCategories}
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}
