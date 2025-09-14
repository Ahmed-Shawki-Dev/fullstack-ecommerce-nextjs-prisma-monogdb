'use client'
import { LogIn } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'

const SignIn = () => {
  const router = useRouter()
  return (
    <>
      <div className='hidden lg:inline-flex'>
        <Button variant='outline' onClick={() => router.push('/signin')}>
          Sign In
        </Button>
      </div>
      <div className='inline-flex lg:hidden'>
        <Button
          variant='link'
          size={'icon'}
          onClick={() => router.push('/signin')}
        >
          <LogIn />
        </Button>
      </div>
    </>
  )
}

export default SignIn
