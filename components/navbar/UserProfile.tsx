import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Home, LayoutDashboard, LogOut, User } from 'lucide-react'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

export default async function UserProfile() {
  const session = await getServerSession()
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button size='icon' variant='link'>
          <Image
            src={session?.user?.image as string}
            alt='avatar'
            width={40}
            height={40}
            className='rounded-full'
          />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link href='/profile'>
            <User /> My Profile
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href='/'>
            <Home /> Home
          </Link>
        </DropdownMenuItem>

        {session?.user?.email === process.env.ALLOWED_EMAIL ? (
          <DropdownMenuItem asChild>
            <Link href='/dashboard'>
              <LayoutDashboard /> Dashboard
            </Link>
          </DropdownMenuItem>
        ) : null}

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <form action='/api/auth/signout' method='post'>
            <button type='submit' className='flex w-full items-center gap-2'>
              <LogOut /> Sign Out
            </button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
