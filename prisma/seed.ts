import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // الأول نتاكد ان الكاتيجوريز موجودة
  const pcCategory = await prisma.category.create({
    data: {
      title: 'PC',
      thumbnail: '/images/pc.webp',
    },
  })

  const laptopCategory = await prisma.category.create({
    data: {
      title: 'Laptop',
      thumbnail: '/images/laptop.webp',
    },
  })

  // بيانات منتجات الـ PC
  const pcProductsData = [
    {
      title: 'Gaming PC - Ryzen 7',
      description: 'High-performance gaming PC with AMD Ryzen 7 processor.',
      price: 1800.0,
      stock: 8,
      thumbnail: '/images/pc-1.webp',
      categoryId: pcCategory.id,
    },
    {
      title: 'Workstation PC - Core i9',
      description: 'Powerful workstation for professional creative tasks.',
      price: 2500.0,
      stock: 5,
      thumbnail: '/images/pc-2.webp',
      categoryId: pcCategory.id,
    },
    {
      title: 'Mini PC',
      description: 'Compact and efficient PC for everyday use.',
      price: 600.0,
      stock: 25,
      thumbnail: '/images/pc-3.webp',
      categoryId: pcCategory.id,
    },
    {
      title: 'All-in-One PC',
      description: 'Sleek and integrated PC with a large display.',
      price: 1200.0,
      stock: 12,
      thumbnail: '/images/pc-4.webp',
      categoryId: pcCategory.id,
    },
    {
      title: 'Budget PC - Core i3',
      description: 'Affordable PC for basic tasks and home use.',
      price: 450.0,
      stock: 30,
      thumbnail: '/images/pc-5.webp',
      categoryId: pcCategory.id,
    },
  ]

  // بيانات منتجات الـ LAPTOP
  const laptopProductsData = [
    {
      title: 'MacBook Pro 16"',
      description: 'Professional laptop for developers and designers.',
      price: 2800.0,
      stock: 15,
      thumbnail: '/images/laptop-1.webp',
      categoryId: laptopCategory.id,
    },
    {
      title: 'Dell XPS 13',
      description: 'Ultra-thin and powerful laptop for productivity.',
      price: 1700.0,
      stock: 20,
      thumbnail: '/images/laptop-2.webp',
      categoryId: laptopCategory.id,
    },
    {
      title: 'Gaming Laptop - RTX 4070',
      description: 'High-end gaming laptop for ultimate performance.',
      price: 2200.0,
      stock: 10,
      thumbnail: '/images/laptop-3.webp',
      categoryId: laptopCategory.id,
    },
    {
      title: 'Chromebook',
      description: 'Lightweight and portable laptop for students.',
      price: 350.0,
      stock: 40,
      thumbnail: '/images/laptop-4.webp',
      categoryId: laptopCategory.id,
    },
    {
      title: 'Lenovo ThinkPad',
      description: 'Durable business laptop with long battery life.',
      price: 1400.0,
      stock: 18,
      thumbnail: '/images/laptop-5.webp',
      categoryId: laptopCategory.id,
    },
  ]

  // إنشاء المنتجات
  await prisma.product.createMany({
    data: [...pcProductsData, ...laptopProductsData],
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
