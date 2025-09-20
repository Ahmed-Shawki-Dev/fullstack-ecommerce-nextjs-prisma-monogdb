'use client'
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Loader, Trash } from 'lucide-react'
import { useState } from 'react'
import { deleteCategoryAction } from '../../../../actions/product.actions'
import { Button } from '../../../../components/ui/button'
import { toast } from 'sonner'

const DeleteCategory = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const onDelete = async () => {
    try {
      setLoading(true)
      await deleteCategoryAction(id)
    } catch (error) {
      console.log(error)
      toast.error("cant delete the category")
      setLoading(false)
    } finally {
      setLoading(false)
      setOpen(false)
    }
  }
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button
          variant={'destructive'}
          size={'icon'}
          onClick={() => setOpen(true)}
        >
          <Trash />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the
            category and remove data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button variant={'destructive'} onClick={onDelete} disabled={loading}>
            {loading ? <Loader className='animate-spin' /> : 'Delete'}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteCategory
