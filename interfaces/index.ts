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

export interface ICategory {
  id: string
  title: string
  thumbnail: string
  createdAt: Date
  updatedAt: Date
}
