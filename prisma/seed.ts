import { prisma } from '../lib/prisma'

async function main() {
  await prisma.category.createMany({
    data: {
      title: 'PC',
      thumbnail: '/images/pc.webp',
    },
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    await prisma.$disconnect()
    process.exit(1)
  })
