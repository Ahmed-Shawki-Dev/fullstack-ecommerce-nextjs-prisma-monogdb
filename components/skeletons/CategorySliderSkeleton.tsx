'use client'

export default function CategorySliderSkeleton() {
  return (
    <div className='flex w-full justify-center gap-4 px-2'>
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className='h-72 w-56 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700'
        />
      ))}
    </div>
  )
}
