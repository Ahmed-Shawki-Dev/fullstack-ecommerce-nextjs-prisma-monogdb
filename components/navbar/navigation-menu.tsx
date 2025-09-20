import Link from 'next/link'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { getAllCategories } from '../../actions/product.actions'
import { navigationData } from '../../data'
import Image from 'next/image'

export default async function NavigationMenuNavbar() {
  const categories = await getAllCategories()
  return (
    <NavigationMenu viewport={false} className='z-30 w-full'>
      <NavigationMenuList>
        {/* Home */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href={navigationData.home.href}>
              {navigationData.home.title}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* About */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href={navigationData.about.href}>
              {navigationData.about.title}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Contact */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href={navigationData.contact.href}>
              {navigationData.contact.title}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Categories dropdown */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            {navigationData.categories.title}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[300px] gap-2 p-2'>
              {categories.categories.map((category) => (
                <li key={category.title}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={`/categories/${category.id}`}
                      className='hover:bg-accent flex  justify-center items-start gap-2 rounded-md p-2'
                    >
                      <div>
                        <div className='flex items-center space-x-1'>
                          <Image src={category.thumbnail as string} alt={category.title} width={20} height={20} className='rounded-full'/>
                          <div className='font-medium'>{category.title}</div>
                        </div>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
