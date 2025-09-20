'use client'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
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
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Cloudinary from '../../../components/product/cloudinary'
import { axiosInstance } from '../../../service/axiosInstance'
import { registerSchema } from '../../../validation'

const Register = () => {
  const router = useRouter()
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      image: '/avatar.webp',
    },
  })

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    try {
      await axiosInstance.post('/register', values)
      toast.success('User registered successfully')
      router.push('/signin')
    } catch (err) {
      const axiosErr = err as AxiosError<{ error: string }>
      toast.error(axiosErr.response?.data?.error ?? axiosErr.message)
    }
  }

  return (
    <section className='flex h-full items-start justify-center px-5 py-10'>
      <Card className='w-full max-w-md'>
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>
            Register To Add Products And Reviews
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
              <FormField
                control={form.control}
                name='image'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image</FormLabel>
                    <FormControl>
                      <div className='flex items-center gap-4'>
                        <Cloudinary onUpload={(url) => field.onChange(url)} />
                        {field.value && (
                          <Image
                            src={field.value || '/default.png'}
                            alt='preview'
                            className='h-12 w-12 rounded-full'
                            width={50}
                            height={50}
                          />
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder='Enter Username' {...field} />
                    </FormControl>
                    <div className='min-h-5'>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
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
                    </div>{' '}
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
              <Button type='submit'>Register</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </section>
  )
}

export default Register
