import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import NextAuth, { type AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const prisma = new PrismaClient()

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email },
        })
        if (!user || !user.hashedPassword) return null

        const isCorrectPassword = await bcrypt.compare(
          credentials?.password ?? '',
          user.hashedPassword,
        )
        if (!isCorrectPassword) return null

        return user
      },
    }),
  ],
  pages: {
    signIn: '/signin',
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
