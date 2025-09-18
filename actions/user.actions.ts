'use server'

import { prisma } from '../lib/prisma'

export const getAllUsersAction = async () => {
  return await prisma.user.findMany()
}

export const getUserAction = async () => {}
