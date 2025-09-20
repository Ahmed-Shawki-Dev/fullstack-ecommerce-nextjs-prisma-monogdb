import { z } from 'zod'

export const registerSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(6),
  image: z.string().optional(),
})

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export const productSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters long'),
  description: z
    .string()
    .min(10, 'Description must be at least 10 characters long'),
  thumbnail: z.string().url('Thumbnail must be a valid URL'),
  price: z.number().positive('Price must be greater than 0'),
  stock: z.number().int().positive('Stock must be greater than 0'),
  category: z.string(),
})

export const categorySchema = z.object({
  title: z.string().min(2, 'Title must be at least 2 characters long'),
  thumbnail: z.string().url('Thumbnail must be a valid URL'),
})
