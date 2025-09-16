import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { ModeToggle } from '../ModeToggle'
import { Separator } from '../ui/separator'
import CartSheet from './CartSheet'
import { Logo } from './logo'
import Nav from './navigation-menu'
import { NavigationSheet } from './NavSheet'
import SearchBar from './Search'
import SignIn from './SignIn'
import UserProfile from './UserProfile'

const Navbar = async () => {
  const session = await getServerSession()
  return (
    <nav className='mx-auto flex w-full flex-wrap items-center justify-evenly'>
      <div className='mx-auto flex h-full w-full items-center justify-evenly py-5'>
        <Link href={'/'}>
          <Logo />
        </Link>
        <div>
          <div className='hidden lg:block'>
            <SearchBar />
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <CartSheet />
          {session === null ? <SignIn /> : <UserProfile />}
          <div className='hidden lg:block'>
            <ModeToggle />
          </div>
          <div className='block lg:hidden'>
            <NavigationSheet />
          </div>
        </div>
      </div>
      <Separator className='block' />
      <div className='bg-background hidden w-full justify-center py-2 lg:flex'>
        <Nav />
      </div>
      <div className='flex items-center justify-center py-2 lg:hidden'>
        <SearchBar />
        <ModeToggle />
      </div>
      <Separator className='block' />
    </nav>
  )
}

export default Navbar
