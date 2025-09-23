import { getProductsFromCategory } from '@/actions/product.actions'
import { CategoriesSlider } from '@/components/CategorySlidersComponent/CategoriesSliderHomePage'

export default async function CategoryProductsSection({
  categoryId,
}: {
  categoryId: string
}) {
  const { products } = await getProductsFromCategory(categoryId, 'asc', 10)
  return <CategoriesSlider products={products} />
}
