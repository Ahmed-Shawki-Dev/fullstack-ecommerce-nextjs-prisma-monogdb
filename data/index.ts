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
        href: '/categories/68c4930da9a813cc462bd10a',
        description: 'Desktops, gaming PCs, and accessories.',
        icon: MonitorIcon,
      },
      {
        title: 'Laptop',
        href: '/categories/68c4930da9a813cc462bd10b',
        description: 'Portable laptops for work and gaming.',
        icon: LaptopIcon,
      },
    ],
  },
}


export const companiesDataObj = [
  {
    src: '/logos/intel.webp',
    alt: 'Intel',
    href: 'https://www.intel.com/',
  },
  {
    src: '/logos/amd.webp',
    alt: 'AMD',
    href: 'https://www.amd.com/',
  },
  {
    src: '/logos/nvidia.webp',
    alt: 'NVIDIA',
    href: 'https://www.nvidia.com/',
  },
  {
    src: '/logos/asus.webp',
    alt: 'ASUS',
    href: 'https://www.asus.com/',
  },
  {
    src: '/logos/msi.webp',
    alt: 'MSI',
    href: 'https://www.msi.com/',
  },
  {
    src: '/logos/gigabyte.webp',
    alt: 'Gigabyte',
    href: 'https://www.gigabyte.com/',
  },
  {
    src: '/logos/dell.webp',
    alt: 'Dell',
    href: 'https://www.dell.com/',
  },
  {
    src: '/logos/hp.webp',
    alt: 'HP',
    href: 'https://www.hp.com/',
  },
  {
    src: '/logos/apple.webp',
    alt: 'Apple',
    href: 'https://www.apple.com/',
  },
  {
    src: '/logos/logitech.webp',
    alt: 'Logitech',
    href: 'https://www.logitech.com/',
  },
  {
    src: '/logos/corsair.webp',
    alt: 'Corsair',
    href: 'https://www.corsair.com/',
  },
  {
    src: '/logos/seagate.webp',
    alt: 'Seagate',
    href: 'https://www.seagate.com/',
  },
  {
    src: '/logos/wd.webp',
    alt: 'Western Digital',
    href: 'https://www.westerndigital.com/',
  },
]
