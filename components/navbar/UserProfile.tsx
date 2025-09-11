'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Home, LogOut, Settings, User } from 'lucide-react'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'

const UserProfile = () => {
  const router = useRouter()
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button size={'icon'} variant={'link'}>
          <Image
            src={'/avatar.webp'}
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
        <DropdownMenuItem onClick={() => router.push('/')}>
          <Home />
          Home
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push('/profile')}>
          <User />
          My Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings />
          Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()} className='cursor-pointer'>
          <LogOut /> Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserProfile
