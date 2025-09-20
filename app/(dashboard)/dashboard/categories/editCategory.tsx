'use client'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { zodResolver } from '@hookform/resolvers/zod'
import { Edit, Loader } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { editCategoryAction } from '../../../../actions/product.actions'
import Cloudinary from '../../../../components/product/cloudinary'
import { Button } from '../../../../components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../../../components/ui/form'
import { Input } from '../../../../components/ui/input'
import { ICategory } from '../../../../interfaces'
import { categorySchema } from '../../../../validation'

const EditCategoryModal = ({
  category,
  id,
}: {
  category: ICategory
  id: string
}) => {
  const { thumbnail, title } = category
  const form = useForm<z.infer<typeof categorySchema>>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      title,
      thumbnail,
    },
  })
  async function onSubmit(data: z.infer<typeof categorySchema>) {
    try {
      setLoading(true)
      await editCategoryAction(id, data)
      setOpen(false)
      form.reset()
    } catch (error) {
      console.log(error)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  return (
    <Dialog open={open} onOpenChange={setOpen} modal={false}>
      <DialogTrigger asChild>
        <Button size={'icon'} variant={'secondary'}>
          <Edit />
        </Button>
      </DialogTrigger>
      {open && (
        <div className='fixed inset-0 z-40 bg-black/30 backdrop-blur-xs' />
      )}
      <DialogContent
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle>Edit A Product</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='w-2/3 space-y-6'
          >
            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder='Enter title' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='thumbnail'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Thumbnail</FormLabel>
                  <FormControl>
                    <div className='flex items-center gap-4'>
                      <Cloudinary onUpload={(url) => field.onChange(url)} />
                      {field.value && (
                        <Image
                          src={field.value}
                          alt='preview'
                          className='h-12 w-12 rounded'
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

            <Button type='submit' disabled={loading}>
              {loading ? <Loader className='animate-spin' /> : 'Submit'}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default EditCategoryModal
