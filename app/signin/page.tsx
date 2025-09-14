'use client'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { AxiosError } from 'axios'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { signInSchema } from '../../validation'
import { useCartStore } from '../../store/cart.store'

const SignInPage = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const removeCartItems = useCartStore(s=>s.removeCartItems)

  async function onSubmit(values: z.infer<typeof signInSchema>) {
    const { email, password } = values
    try {
      setLoading(true)
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })
      if (!res?.ok) {
        form.setError('email', { message: 'Invalid email or password' })
        form.setError('password', { message: 'Invalid email or password' })
      } else {
        removeCartItems()
        router.push('/')
        router.refresh()
      }
    } catch (err) {
      const axiosErr = err as AxiosError<{ error: string }>
      toast.error(axiosErr.response?.data?.error ?? axiosErr.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className='flex h-full items-start justify-center px-5 py-10'>
      <Card className='w-full max-w-md'>
        <CardHeader>
          <CardTitle className='text-center text-3xl'>Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder='Enter Email' {...field} />
                    </FormControl>
                    <div className='min-h-5'>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Enter Password'
                        type='password'
                        {...field}
                      />
                    </FormControl>
                    <div className='min-h-5'>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <div>
                <p>
                  do not have account?{' '}
                  <Link href={'/register'} className='underline'>
                    Register
                  </Link>
                </p>
              </div>
              <Button type='submit' disabled={loading}>
                {loading ? (
                  <span className='h-5 w-5 animate-spin rounded-full border-2 border-black border-l-transparent bg-transparent'></span>
                ) : (
                  'Sign In'
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </section>
  )
}

export default SignInPage
