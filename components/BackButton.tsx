'use client'

import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

const BackButton = () => {
  const router = useRouter()
  return (
    <div className='flex cursor-pointer space-x-2 text-primary/70' 
    onClick={()=>router.back()}>
      <ArrowLeft />
      Back
    </div>
  )
}

export default BackButton
