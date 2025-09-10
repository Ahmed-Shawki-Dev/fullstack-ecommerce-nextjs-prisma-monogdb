'use server'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getAllUsersAction = async () => {
  return await prisma.user.findMany()
}

export const getUserAction = async () => {}
