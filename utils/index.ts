import type { ICart } from '@/interfaces/products'

export const addToCart = (toAddProduct: ICart, Products: ICart[]) => {
  const exists = Products.some((item) => item.id === toAddProduct.id)

  if (exists) {
    return Products.map((item) =>
      item.id === toAddProduct.id
        ? { ...item, qty: (item.qty ?? 0) + 1 }
        : item,
    )
  }

  return [...Products, { ...toAddProduct, qty: 1 }]
}
