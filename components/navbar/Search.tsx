'use client'
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'

export default function SearchBar() {
  return (
    <form className='relative mx-auto w-full max-w-xs'>
      <Input
        name='search'
        className='peer h-8 ps-8 pe-10'
        placeholder='Search'
        type='search'
      />
      <div className='text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-2 peer-disabled:opacity-50'>
        <SearchIcon size={16} />
      </div>
      <div className='text-muted-foreground pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-2'></div>
    </form>
  )
}
