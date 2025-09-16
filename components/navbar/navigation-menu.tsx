'use client'

import Link from 'next/link'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { navigationData } from '../../data'

export default function NavigationMenuNavbar() {
  return (
    <NavigationMenu viewport={false} className='w-full z-30'>
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
              {navigationData.categories.items.map((item) => (
                <li key={item.title}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className='hover:bg-accent flex items-center justify-center gap-2 rounded-md p-2'
                    >
                      <div>
                        <div className='flex items-center space-x-1'>
                          <item.icon className='h-4 w-4' />
                          <div className='font-medium'>{item.title}</div>
                        </div>
                        <p className='text-muted-foreground text-sm'>
                          {item.description}
                        </p>
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
