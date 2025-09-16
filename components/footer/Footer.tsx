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
      <footer className='mt-20 border-t-[1px]'>
        <div className='mx-auto max-w-(--breakpoint-xl)'>
          <div className='flex flex-col items-center justify-start py-12'>
            {/* Logo */}
            <Logo />

            <ul className='mt-6 flex flex-wrap items-center gap-4'>
              {footerLinks.map(({ title, href }) => (
                <li key={title}>
                  <Link
                    href={href}
                    className='text-muted-foreground hover:text-foreground'
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Separator />
          <div className='flex flex-col-reverse items-center justify-between gap-x-2 gap-y-5 px-6 py-8 sm:flex-row xl:px-0'>
            {/* Copyright */}
            <span className='text-muted-foreground'>
              &copy; {new Date().getFullYear()}{' '}
              <Link href='/' target='_blank'>
                hazTech
              </Link>
              . All rights reserved.
            </span>

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
        </div>
      </footer>
    </>
  )
}

export default Footer
