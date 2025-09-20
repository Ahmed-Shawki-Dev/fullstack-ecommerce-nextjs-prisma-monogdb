'use client'

export default function Loading() {
  return (
    <div className='bg-background/80 fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm'>
      <div className='border-primary h-12 w-12 animate-spin rounded-full border-4 border-t-transparent' />
    </div>
  )
}
