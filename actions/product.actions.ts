'use server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getAllProductsAction = async () => {
  return await prisma.product.findMany({
    include: {
      category: true,
    },
  })
}

export const getProduct = async (id: string) => {
  return await prisma.product.findUnique({
    where: { id },
  })
}

export const getSearchedProducts = async (text: string) => {
  return await prisma.product.findMany({
    where: {
      title: {
        contains: text,
        mode: 'insensitive',
      },
    },
    include: {
      category: true,
    },
  })

}

export const getAllCategories = async () => {
  return await prisma.category.findMany()
}

export const getCategory = async (id: string) => {
  return await prisma.category.findUnique({
    where: { id },
  })
}

export const getProductsFromCategory = async (
  id: string,
  sort: 'asc' | 'desc' = 'asc',
  itemsNumber?:number
) => {
  return await prisma.product.findMany({
    where: {
      categoryId: id,
    },
    include: {
      category: true,
    },
    orderBy: {
      price: sort,
    },
    take: itemsNumber,
  })
}

// export const addProduct = async()=>{
//   return prisma.product.create({
//     data:{
//       description:
//     }
//   })
// }
