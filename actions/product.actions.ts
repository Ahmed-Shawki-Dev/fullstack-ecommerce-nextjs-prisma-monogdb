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

// export const addProduct = async()=>{
//   return prisma.product.create({
//     data:{
//       description:
//     }
//   })
// }
