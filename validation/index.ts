import { z } from 'zod'

export const registerSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(6),
})

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})