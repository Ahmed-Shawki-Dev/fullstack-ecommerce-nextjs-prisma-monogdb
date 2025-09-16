import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { navigationData } from '../../data'
import { Logo } from './logo'

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTitle className='sr-only'>Navbar</SheetTitle>

      <SheetTrigger asChild>
        <Button variant='ghost'  size='icon' className='rounded-full text-foreground'>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className='px-6 py-3'>
        <Logo />
        <div className='mt-6 [&>div]:h-full' />
        <Link href={navigationData.home.href}>{navigationData.home.title}</Link>
        <Link href={navigationData.about.href}>
          {navigationData.about.title}
        </Link>
        <Link href={navigationData.contact.href}>
          {navigationData.contact.title}
        </Link>
        <Accordion type='single' collapsible>
          <AccordionItem value='item-2'>
            <AccordionTrigger>
              {navigationData.categories.title}
            </AccordionTrigger>
            <AccordionContent>
              {navigationData.categories.items.map((item) => (
                <div
                  className='mb-4 flex items-center space-x-1'
                  key={item.href}
                >
                  <item.icon className='h-4 w-4' />
                  <Link href={item.href}>{item.title}</Link>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </SheetContent>
    </Sheet>
  )
}
