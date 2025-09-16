'use client'
import { Loader } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useTransition } from 'react'

export function SortButton({
  value,
  children,
}: {
  value: string
  children: React.ReactNode
}) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()

  const handleClick = () => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('sort', value)

    startTransition(() => {
      router.replace(`?${params.toString()}`)
    })
  }

  return (
    <div>
      {isPending ? (
        <div className='backdrop-blur-5xl flex animate-pulse items-center  space-x-1'>
          <span>{children}</span>
          <Loader className='mb-2 h-4 w-4 animate-spin text-sm text-gray-700 dark:text-gray-400' />
        </div>
      ) : (
        <button
          onClick={handleClick}
          className='mb-2 text-sm text-gray-700 dark:text-gray-400'
        >
          {children}
        </button>
      )}
    </div>
  )
}
