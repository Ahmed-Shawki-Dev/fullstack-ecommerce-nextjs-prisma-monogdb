import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.product.create({
    data: {
      title: 'PC RTX5090',
      description: 'The Best GPU In The World',
      price: 2000,
      stock: 10,
      thumbnail: '/img.png',
      category: {
        connect: { title: 'Graphic Card' },
      },
    },
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
