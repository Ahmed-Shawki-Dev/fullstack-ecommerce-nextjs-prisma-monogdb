import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { ModeToggle } from '../ModeToggle'
import Cart from './Cart'
import { Logo } from './logo'
import { NavMenu } from './NavMenu'
import { NavigationSheet } from './NavSheet'
import SignIn from './SignIn'
import UserProfile from './UserProfile'

const Navbar = async () => {
  const session = await getServerSession()
  console.log(session)
  return (
    <nav className='bg-background absolute mx-auto h-16 w-full max-w-full rounded-full border dark:border-slate-700/70'>
      <div className='mx-auto flex h-full items-center justify-between px-4'>
        <Link href={'/'}>
          <Logo />
        </Link>
        <NavMenu className='hidden md:block' />
        <div className='flex items-center gap-3'>
          <Cart />
          {session === null ? <SignIn /> : <UserProfile />}
          <ModeToggle />
          <div className='md:hidden'>
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
