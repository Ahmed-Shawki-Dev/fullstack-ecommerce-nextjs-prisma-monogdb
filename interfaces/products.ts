export interface IProduct {
  id?: string
  thumbnail: string
  title: string
  description: string
  stock: number
  categoryId: string
  price: number
}

export interface ICart extends IProduct {
  qty: number
}
