import { Facebook, Github, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'
import { Logo } from '../navbar/logo'



const Footer = () => {
  return (
    <>
      <footer className='mt-10 border-t-[1px]'>
        <div className='mx-auto flex max-w-7xl gap-4 flex-col lg:flex-row items-center justify-between px-6 py-8'>
          {/* Logo + Copyright */}
          <div className='flex items-center flex-col lg:flex-row  gap-4'>
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
              <Facebook className='h-5 w-5' />
            </Link>
            <Link href='#' target='_blank'>
              <Twitter className='h-5 w-5' />
            </Link>
            <Link href='#' target='_blank'>
              <Github className='h-5 w-5' />
            </Link>
            <Link href='#' target='_blank'>
              <Linkedin className='h-5 w-5' />
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
