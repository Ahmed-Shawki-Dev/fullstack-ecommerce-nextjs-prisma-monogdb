import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // الأول نتاكد ان الكاتيجوريز موجودة
  await prisma.category.createMany({
    data: [
      { title: 'Laptops' },
      { title: 'Keyboards' },
      { title: 'Monitors' },
      { title: 'Headphones' },
    ],
  })

  // بعدين نعمل البرودكتس
  await prisma.product.create({
    data: {
      title: 'PC RTX 5090',
      description: 'The Best GPU In The World',
      price: 2000,
      stock: 10,
      thumbnail: '/img.png',
      category: {
        connect: { title: 'Graphic Card' },
      },
    },
  })

  await prisma.product.create({
    data: {
      title: 'Gaming Laptop i9',
      description: 'Powerful laptop for gamers',
      price: 1500,
      stock: 5,
      thumbnail: '/img.png',
      category: {
        connect: { title: 'Laptops' },
      },
    },
  })

  await prisma.product.create({
    data: {
      title: 'Mechanical Keyboard',
      description: 'RGB mechanical keyboard',
      price: 120,
      stock: 50,
      thumbnail: '/img.png',
      category: {
        connect: { title: 'Keyboards' },
      },
    },
  })

  await prisma.product.create({
    data: {
      title: 'UltraWide Monitor',
      description: 'Perfect for productivity and gaming',
      price: 600,
      stock: 20,
      thumbnail: '/img.png',
      category: {
        connect: { title: 'Monitors' },
      },
    },
  })

  await prisma.product.create({
    data: {
      title: 'Wireless Headset',
      description: 'Crystal clear sound and comfort',
      price: 200,
      stock: 30,
      thumbnail: '/img.png',
      category: {
        connect: { title: 'Headphones' },
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
