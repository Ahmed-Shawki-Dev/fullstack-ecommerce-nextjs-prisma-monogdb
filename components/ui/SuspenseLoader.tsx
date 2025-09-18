// components/ui/SuspenseLoader.tsx
'use client'

export default function SuspenseLoader() {
  return (
    <div className='flex w-full items-center justify-center py-10'>
      <div className='border-muted-foreground h-10 w-10 animate-spin rounded-full border-4 border-t-transparent' />
    </div>
  )
}
