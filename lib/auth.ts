// lib/auth.ts
import { getServerSession } from 'next-auth'
import { cache } from 'react'

export const getCachedSession = cache(async () => {
  return await getServerSession()
})
