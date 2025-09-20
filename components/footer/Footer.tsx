import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { BsFacebook, BsGithub, BsLinkedin, BsTwitterX } from 'react-icons/bs'
import { Logo } from '../navbar/logo'

const footerLinks = [
  {
    title: 'Overview',
    href: '#',
  },
  {
    title: 'Features',
    href: '#',
  },
  {
    title: 'About',
    href: '#',
  },
  {
    title: 'Contact',
    href: '#',
  },
  {
    title: 'Help',
    href: '#',
  },
]

const Footer = () => {
  return (
    <>
      <footer className='mt-10 border-t-[1px]'>
        <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-8'>
          {/* Logo + Copyright */}
          <div className='flex items-center gap-4'>
            <Logo />
            <span className='text-muted-foreground'>
              &copy; {new Date().getFullYear()}{' '}
              <Link href='/' target='_blank'>
                hazTech
              </Link>
              . All rights reserved.
            </span>
          </div>

          {/* Social Icons */}
          <div className='text-muted-foreground flex items-center gap-5'>
            <Link href='#' target='_blank'>
              <BsFacebook className='h-5 w-5' />
            </Link>
            <Link href='#' target='_blank'>
              <BsTwitterX className='h-5 w-5' />
            </Link>
            <Link href='#' target='_blank'>
              <BsGithub className='h-5 w-5' />
            </Link>
            <Link href='#' target='_blank'>
              <BsLinkedin className='h-5 w-5' />
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
