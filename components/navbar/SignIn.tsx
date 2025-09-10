'use client'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'

const SignIn = () => {
  const router = useRouter()
  return (
    <Button
      variant='outline'
      className='hidden sm:inline-flex'
      onClick={() => router.push('/signin')}
    >
      Sign In
    </Button>
  )
}

export default SignIn
