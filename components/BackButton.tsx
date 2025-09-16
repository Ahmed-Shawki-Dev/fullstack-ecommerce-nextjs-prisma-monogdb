'use client'

import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

const BackButton = () => {
  const router = useRouter()
  return (
    <div
      className='flex cursor-pointer space-x-2'
      onClick={() => router.back()}
    >
      <ArrowLeft />
      Back
    </div>
  )
}

export default BackButton
