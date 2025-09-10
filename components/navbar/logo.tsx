export const Logo = () => (
  <div className='flex flex-row items-center justify-center space-x-2'>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='lucide lucide-castle-icon lucide-castle text-primary'
    >
      <path d='M10 5V3' />
      <path d='M14 5V3' />
      <path d='M15 21v-3a3 3 0 0 0-6 0v3' />
      <path d='M18 3v8' />
      <path d='M18 5H6' />
      <path d='M22 11H2' />
      <path d='M22 9v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9' />
      <path d='M6 3v8' />
    </svg>
    <p className='text-primary font-semibold'>Hardware Palace</p>
  </div>
)
