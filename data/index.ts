// navigation-data.ts
import { LaptopIcon, MonitorIcon } from 'lucide-react'

export const navigationData = {
  home: { title: 'Home', href: '/' },
  about: { title: 'About', href: '/about' },
  contact: { title: 'Contact', href: '/contact' },

  categories: {
    title: 'Categories',
    items: [
      {
        title: 'PC',
        href: '/categories/pc',
        description: 'Desktops, gaming PCs, and accessories.',
        icon: MonitorIcon,
      },
      {
        title: 'Laptop',
        href: '/categories/laptop',
        description: 'Portable laptops for work and gaming.',
        icon: LaptopIcon,
      },
    ],
  },
}
