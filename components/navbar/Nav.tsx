'use client'
import * as React from 'react'
import { useEffect, useState, useRef, useId } from 'react'
import { SearchIcon, BellIcon, UserIcon, ChevronDownIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import type { ComponentProps } from 'react'
// Simple logo component for the navbar
const Logo = (props: React.SVGAttributes<SVGElement>) => {
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 324 323'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect
        x='88.1023'
        y='144.792'
        width='151.802'
        height='36.5788'
        rx='18.2894'
        transform='rotate(-38.5799 88.1023 144.792)'
        fill='currentColor'
      />
      <rect
        x='85.3459'
        y='244.537'
        width='151.802'
        height='36.5788'
        rx='18.2894'
        transform='rotate(-38.5799 85.3459 244.537)'
        fill='currentColor'
      />
    </svg>
  )
}
// Hamburger icon component
const HamburgerIcon = ({
  className,
  ...props
}: React.SVGAttributes<SVGElement>) => (
  <svg
    className={cn('pointer-events-none', className)}
    width={16}
    height={16}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M4 12L20 12'
      className='origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]'
    />
    <path
      d='M4 12H20'
      className='origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45'
    />
    <path
      d='M4 12H20'
      className='origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]'
    />
  </svg>
)
// Notification Menu Component
const NotificationMenu = ({
  notificationCount = 3,
  onItemClick,
}: {
  notificationCount?: number
  onItemClick?: (item: string) => void
}) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant='ghost' size='icon' className='relative h-9 w-9'>
        <BellIcon className='h-4 w-4' />
        {notificationCount > 0 && (
          <Badge className='absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center p-0 text-xs'>
            {notificationCount > 9 ? '9+' : notificationCount}
          </Badge>
        )}
        <span className='sr-only'>Notifications</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align='end' className='w-80'>
      <DropdownMenuLabel>Notifications</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={() => onItemClick?.('notification1')}>
        <div className='flex flex-col gap-1'>
          <p className='text-sm font-medium'>New message received</p>
          <p className='text-muted-foreground text-xs'>2 minutes ago</p>
        </div>
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => onItemClick?.('notification2')}>
        <div className='flex flex-col gap-1'>
          <p className='text-sm font-medium'>System update available</p>
          <p className='text-muted-foreground text-xs'>1 hour ago</p>
        </div>
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => onItemClick?.('notification3')}>
        <div className='flex flex-col gap-1'>
          <p className='text-sm font-medium'>Weekly report ready</p>
          <p className='text-muted-foreground text-xs'>3 hours ago</p>
        </div>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={() => onItemClick?.('view-all')}>
        View all notifications
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
)
// User Menu Component
const UserMenu = ({
  userName = 'John Doe',
  userEmail = 'john@example.com',
  userAvatar,
  onItemClick,
}: {
  userName?: string
  userEmail?: string
  userAvatar?: string
  onItemClick?: (item: string) => void
}) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button
        variant='ghost'
        className='hover:bg-accent hover:text-accent-foreground h-9 px-2 py-0'
      >
        <Avatar className='h-7 w-7'>
          <AvatarImage src={userAvatar} alt={userName} />
          <AvatarFallback className='text-xs'>
            {userName
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </AvatarFallback>
        </Avatar>
        <ChevronDownIcon className='ml-1 h-3 w-3' />
        <span className='sr-only'>User menu</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align='end' className='w-56'>
      <DropdownMenuLabel>
        <div className='flex flex-col space-y-1'>
          <p className='text-sm leading-none font-medium'>{userName}</p>
          <p className='text-muted-foreground text-xs leading-none'>
            {userEmail}
          </p>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={() => onItemClick?.('profile')}>
        Profile
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => onItemClick?.('settings')}>
        Settings
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => onItemClick?.('billing')}>
        Billing
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={() => onItemClick?.('logout')}>
        Log out
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
)
// Types
export interface Navbar08NavItem {
  href?: string
  label: string
  active?: boolean
}
export interface Navbar08Props extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode
  logoHref?: string
  navigationLinks?: Navbar08NavItem[]
  searchPlaceholder?: string
  searchShortcut?: string
  userName?: string
  userEmail?: string
  userAvatar?: string
  notificationCount?: number
  onNavItemClick?: (href: string) => void
  onSearchSubmit?: (query: string) => void
  onNotificationItemClick?: (item: string) => void
  onUserItemClick?: (item: string) => void
}
// Default navigation links
const defaultNavigationLinks: Navbar08NavItem[] = [
  { href: '#', label: 'Home', active: true },
  { href: '#', label: 'Features' },
  { href: '#', label: 'Pricing' },
  { href: '#', label: 'About' },
]
export const Navbar08 = React.forwardRef<HTMLElement, Navbar08Props>(
  (
    {
      className,
      logo = <Logo />,
      logoHref = '#',
      navigationLinks = defaultNavigationLinks,
      searchPlaceholder = 'Search...',
      searchShortcut = '⌘K',
      userName = 'John Doe',
      userEmail = 'john@example.com',
      userAvatar,
      notificationCount = 3,
      onNavItemClick,
      onSearchSubmit,
      onNotificationItemClick,
      onUserItemClick,
      ...props
    },
    ref,
  ) => {
    const [isMobile, setIsMobile] = useState(false)
    const containerRef = useRef<HTMLElement>(null)
    const searchId = useId()
    useEffect(() => {
      const checkWidth = () => {
        if (containerRef.current) {
          const width = containerRef.current.offsetWidth
          setIsMobile(width < 768) // 768px is md breakpoint
        }
      }
      checkWidth()
      const resizeObserver = new ResizeObserver(checkWidth)
      if (containerRef.current) {
        resizeObserver.observe(containerRef.current)
      }
      return () => {
        resizeObserver.disconnect()
      }
    }, [])
    // Combine refs
    const combinedRef = React.useCallback(
      (node: HTMLElement | null) => {
        containerRef.current = node
        if (typeof ref === 'function') {
          ref(node)
        } else if (ref) {
          ref.current = node
        }
      },
      [ref],
    )
    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const formData = new FormData(e.currentTarget)
      const query = formData.get('search') as string
      if (onSearchSubmit) {
        onSearchSubmit(query)
      }
    }
    return (
      <header
        ref={combinedRef}
        className={cn(
          'bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b px-4 backdrop-blur md:px-6 [&_*]:no-underline',
          className,
        )}
        {...props}
      >
        <div className='container mx-auto max-w-screen-2xl'>
          {/* Top section */}
          <div className='flex h-16 items-center justify-between gap-4'>
            {/* Left side */}
            <div className='flex flex-1 items-center gap-2'>
              {/* Mobile menu trigger */}
              {isMobile && (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      className='group hover:bg-accent hover:text-accent-foreground h-8 w-8'
                      variant='ghost'
                      size='icon'
                    >
                      <HamburgerIcon />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent align='start' className='w-64 p-1'>
                    <NavigationMenu className='max-w-none'>
                      <NavigationMenuList className='flex-col items-start gap-0'>
                        {navigationLinks.map((link, index) => (
                          <NavigationMenuItem key={index} className='w-full'>
                            <button
                              onClick={(e) => {
                                e.preventDefault()
                                if (onNavItemClick && link.href)
                                  onNavItemClick(link.href)
                              }}
                              className={cn(
                                'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex w-full cursor-pointer items-center rounded-md px-3 py-2 text-sm font-medium no-underline transition-colors',
                                link.active &&
                                  'bg-accent text-accent-foreground',
                              )}
                            >
                              {link.label}
                            </button>
                          </NavigationMenuItem>
                        ))}
                      </NavigationMenuList>
                    </NavigationMenu>
                  </PopoverContent>
                </Popover>
              )}
              {/* Logo */}
              <div className='flex items-center'>
                <button
                  onClick={(e) => e.preventDefault()}
                  className='text-primary hover:text-primary/90 flex cursor-pointer items-center space-x-2 transition-colors'
                >
                  <div className='text-2xl'>{logo}</div>
                  <span className='hidden text-xl font-bold sm:inline-block'>
                    shadcn.io
                  </span>
                </button>
              </div>
            </div>
            {/* Middle area */}
            <div className='grow'>
              {/* Search form */}
              <form
                onSubmit={handleSearchSubmit}
                className='relative mx-auto w-full max-w-xs'
              >
                <Input
                  id={searchId}
                  name='search'
                  className='peer h-8 ps-8 pe-10'
                  placeholder={searchPlaceholder}
                  type='search'
                />
                <div className='text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-2 peer-disabled:opacity-50'>
                  <SearchIcon size={16} />
                </div>
                <div className='text-muted-foreground pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-2'>
                  <kbd className='text-muted-foreground/70 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium'>
                    {searchShortcut}
                  </kbd>
                </div>
              </form>
            </div>
            {/* Right side */}
            <div className='flex flex-1 items-center justify-end gap-2'>
              {/* Notification */}
              <NotificationMenu
                notificationCount={notificationCount}
                onItemClick={onNotificationItemClick}
              />
              {/* User menu */}
              <UserMenu
                userName={userName}
                userEmail={userEmail}
                userAvatar={userAvatar}
                onItemClick={onUserItemClick}
              />
            </div>
          </div>
          {/* Bottom navigation */}
          {!isMobile && (
            <div className='border-t py-2'>
              {/* Navigation menu */}
              <NavigationMenu>
                <NavigationMenuList className='gap-2'>
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuLink
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault()
                          if (onNavItemClick && link.href)
                            onNavItemClick(link.href)
                        }}
                        className={cn(
                          'text-muted-foreground hover:text-primary group bg-background focus:bg-accent focus:text-accent-foreground inline-flex h-10 w-max cursor-pointer items-center justify-center rounded-md px-4  py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50',
                          link.active && 'text-primary',
                        )}
                        data-active={link.active}
                      >
                        {link.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          )}
        </div>
      </header>
    )
  },
)
Navbar08.displayName = 'Navbar08'
export { Logo, HamburgerIcon, NotificationMenu, UserMenu }
