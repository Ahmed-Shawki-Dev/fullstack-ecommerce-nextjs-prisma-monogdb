'use client'

export default function SuspenseLoader() {
  return (
    <div className='grid flex-1 grid-cols-[repeat(auto-fill,minmax(300px,max-content))] justify-center gap-4'>
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className='bg-muted aspect-square w-[300px] animate-pulse rounded-lg'
        />
      ))}
    </div>
  )
}
