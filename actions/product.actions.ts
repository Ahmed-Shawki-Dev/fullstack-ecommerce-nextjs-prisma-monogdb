'use server'
import { revalidatePath } from 'next/cache'
import z from 'zod'
import { prisma } from '../lib/prisma'
import { productSchema } from '../validation'

export const getAllProductsAction = async (
  take?: number,
  skip: number = 0,
  text?: string,
) => {
  const products = await prisma.product.findMany({
    skip,
    take,
    include: {
      category: true,
    },
    where: {
      title: {
        contains: text,
        mode: 'insensitive',
      },
    },
  })
  const total = await prisma.product.count({
    where: {
      title: {
        contains: text,
        mode: 'insensitive',
      },
    },
  })

  return { products, total }
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
  itemsNumber?: number,
  skip: number = 0,
) => {
  const products = await prisma.product.findMany({
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
    skip: skip,
  })
  const total = await prisma.product.count({ where: { categoryId: id } })

  return { products, total }
}

export const addProductAction = async (data: z.infer<typeof productSchema>) => {
  await prisma.product.create({
    data: {
      title: data.title,
      description: data.description,
      price: data.price,
      stock: data.stock,
      thumbnail: data.thumbnail,
      categoryId: data.category,
    },
  })
  revalidatePath('/dashboard')
}

export const deleteProductAction = async (id: string) => {
  await prisma.product.delete({
    where: {
      id,
    },
  })
  revalidatePath('/dashboard')
}

export const editProductAction = async (
  id: string,
  data: z.infer<typeof productSchema>,
) => {
  await prisma.product.update({
    where: {
      id,
    },
    data: {
      title: data.title,
      description: data.description,
      price: data.price,
      stock: data.stock,
      thumbnail: data.thumbnail,
      categoryId: data.category,
    },
  })
  revalidatePath('/dashboard')
}
