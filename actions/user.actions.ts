'use server'

import { prisma } from '../lib/prisma'

export const getAllUsersAction = async (
  take?: number,
  skip: number = 0,
  text?: string,
) => {
  const users = await prisma.user.findMany({
    skip,
    take,
    where: {
      name: {
        contains: text,
        mode: 'insensitive',
      },
    },
  })
  const total = await prisma.user.count({
    where: {
      name: {
        contains: text,
        mode: 'insensitive',
      },
    },
  })

  return { users, total }
}
