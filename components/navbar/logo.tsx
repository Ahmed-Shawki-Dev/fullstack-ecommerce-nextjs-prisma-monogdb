import Image from 'next/image'

export const Logo = () => (
  <div className='flex flex-row items-center justify-center space-x-2 w-[150px] h-[50px]'>
    <Image
      src='/logo.svg'
      alt='Logo'
      width={150}
      height={50}
      style={{ objectFit: 'contain' }}
    />
  </div>
)
