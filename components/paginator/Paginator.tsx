'use client'

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { ArrowLeftCircleIcon, ArrowRightCircle } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

interface PaginatorProps {
  skip: number
  take: number
  total: number
}

const Paginator: React.FC<PaginatorProps> = ({ skip, take, total }) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const currentPage = Math.floor(skip / take) + 1
  const totalPages = Math.ceil(total / take)

  const updatePage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('skip', ((page - 1) * take).toString())
    params.set('take', take.toString())
    router.push(`${pathname}?${params.toString()}`)
  }

  const handleNext = () => {
    if (currentPage < totalPages) updatePage(currentPage + 1)
  }

  const handlePrevious = () => {
    if (currentPage > 1) updatePage(currentPage - 1)
  }

  return (
    <Pagination className='flex items-center'>
      <PaginationContent className='flex items-center space-x-2'>
        <PaginationItem
          onClick={() => updatePage(1)}
          className='cursor-pointer'
        >
          <ArrowLeftCircleIcon />
        </PaginationItem>

        <PaginationItem>
          <PaginationPrevious onClick={handlePrevious} />
        </PaginationItem>

        <PaginationItem>
          <div className='rounded px-4 py-1 font-medium'>
            {`Items ${skip + 1} - ${Math.min(skip + take, total)} of ${total}`}
          </div>
        </PaginationItem>

        <PaginationItem>
          <PaginationNext onClick={handleNext} />
        </PaginationItem>

        <PaginationItem
          onClick={() => updatePage(totalPages)}
          className='cursor-pointer'
        >
          <ArrowRightCircle />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default Paginator
