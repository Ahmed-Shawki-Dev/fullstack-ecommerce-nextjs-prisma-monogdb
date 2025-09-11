import { inherits } from "util"

export interface IProduct {
  id?: string
  thumbnail: string
  title: string
  description: string
  stock: number
  category: string
  price: number
  linkUrl: string
}

export interface ICart extends IProduct {
qty:number
}