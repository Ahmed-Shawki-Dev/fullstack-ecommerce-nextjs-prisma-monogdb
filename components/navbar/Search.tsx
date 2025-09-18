'use client'

import { Input } from '@/components/ui/input'
import { SearchIcon, X } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function SearchBar() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const search = searchParams.get('search') || ''

  return (
    <form className='relative mx-auto w-full max-w-xs' action={'/products'}>
      <Input
        name='search'
        defaultValue={search}
        className='peer h-8 ps-8 pe-10'
        placeholder='Search'
        type='search'
        autoComplete='off'
      />
      <div className='text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-2 peer-disabled:opacity-50'>
        <SearchIcon size={16} />
      </div>

      {search && (
        <button
          type='button'
          onClick={() => router.push(pathname)} // هنا بيرجعك من غير search param
          className='text-muted-foreground hover:text-foreground absolute inset-y-0 end-0 flex items-center justify-center pe-2'
        >
          <X size={14} />
        </button>
      )}
    </form>
  )
}
