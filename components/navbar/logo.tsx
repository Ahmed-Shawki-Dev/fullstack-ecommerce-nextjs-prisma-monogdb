'use client'
import Image from 'next/image'

export const Logo = () => {
  return (
    <Image
      src='/logo.svg'
      alt='Logo'
      width={150}
      height={50}
      priority={true}
      className='object-contain'
    />
  )
}
