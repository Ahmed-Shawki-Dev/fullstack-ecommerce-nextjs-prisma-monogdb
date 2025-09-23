'use client'

export default function ProductSkeleton() {
  return (
    <main className='flex animate-pulse flex-col space-y-5 px-4 space-x-10 py-10 sm:px-0 lg:flex-row'>
      {/* Left section */}
      <div className='flex basis-1/2 flex-col space-y-5'>
        <div className='h-10 w-28 rounded-md bg-gray-300 dark:bg-gray-700' />
        <div className='h-[500px] w-full rounded-xl bg-gray-300 dark:bg-gray-700' />
      </div>

      {/* Right section */}
      <div className='flex basis-1/2 flex-col justify-center space-y-4'>
        <div className='h-8 w-3/4 rounded-md bg-gray-300 dark:bg-gray-700' />
        <div className='h-4 w-full rounded-md bg-gray-300 dark:bg-gray-700' />
        <div className='h-4 w-5/6 rounded-md bg-gray-300 dark:bg-gray-700' />
        <div className='h-4 w-2/3 rounded-md bg-gray-300 dark:bg-gray-700' />
        <div className='h-6 w-24 rounded-md bg-gray-300 dark:bg-gray-700' />
        <div className='h-10 w-40 rounded-lg bg-gray-300 dark:bg-gray-700' />
      </div>
    </main>
  )
}
