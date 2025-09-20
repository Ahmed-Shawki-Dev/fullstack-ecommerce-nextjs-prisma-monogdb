import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import Image from 'next/image'
import { getAllUsersAction } from '../../../../actions/user.actions'
import Paginator from '../../../../components/paginator/Paginator'

export async function UsersTable({
  take,
  skip,
  search,
}: {
  take: number
  skip: number
  search: string
}) {
  const users = await getAllUsersAction(take, skip, search)

  return (
    <Table>
      <TableCaption>
        <Paginator skip={skip} take={take} total={users.total} />
      </TableCaption>
      <TableHeader>
        <TableRow className='font-bold uppercase'>
          <TableHead className='font-bold'>ID</TableHead>
          <TableHead className='font-bold'>name</TableHead>
          <TableHead className='font-bold'>email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.users.map((user) => (
          <TableRow key={user.id}>

            <TableCell className='font-medium'>{user.id}</TableCell>
            <TableCell className='font-medium'>{user.name}</TableCell>
            <TableCell className='font-medium'>{user.email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
