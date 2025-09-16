// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

// async function main() {
//   await prisma.product.createMany({
//     data: Array.from({ length: 20 }).map(() => ({
//       title: 'Lenovo ThinkPad',
//       description: 'Durable business laptop with long battery life.',
//       price: 1400.0,
//       stock: 18,
//       thumbnail: '/images/laptop-1.webp',
//       categoryId: '68c4930da9a813cc462bd10b',
//     })),
//   })
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     await prisma.$disconnect()
//     process.exit(1)
//   })
