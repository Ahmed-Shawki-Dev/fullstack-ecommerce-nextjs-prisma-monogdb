'use client'
import { Input } from '@/components/ui/input'
import { SearchIcon, X } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useRef, useState, useEffect } from 'react'

export default function TableSearch({ text = '/products' }: { text?: string }) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)

  const [search, setSearch] = useState(() => {
    return searchParams.get('search') || ''
  })

  useEffect(() => {
    const handler = setTimeout(() => {
      const newSearchParams = new URLSearchParams(searchParams.toString())
      if (search) {
        newSearchParams.set('search', search)
      } else {
        newSearchParams.delete('search')
      }
      router.replace(`${text}?${newSearchParams.toString()}`)
    }, 500)
    return () => clearTimeout(handler)
  }, [search, text]) // هنا الـ dependencies الصحيحة

  const clearSearch = () => {
    setSearch('')
    inputRef.current?.focus()
  }

  return (
    <div className='mx-auto w-full max-w-xs'>
      <div className='relative'>
        <Input
          ref={inputRef}
          name='search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='peer h-8 ps-8 pe-10'
          placeholder='Search'
          type='search'
          autoComplete='off'
        />
        <div className='text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-2'>
          <SearchIcon size={16} />
        </div>
      </div>
      {search && (
        <div className='mt-3 flex items-center justify-center gap-2 text-xl font-bold'>
          <span>{search}</span>
          <button
            type='button'
            onClick={clearSearch}
            className='text-muted-foreground hover:text-foreground'
          >
            <X size={20} />
          </button>
        </div>
      )}
    </div>
  )
}
