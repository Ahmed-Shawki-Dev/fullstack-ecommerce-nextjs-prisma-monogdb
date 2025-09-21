import { SectionCards } from '../../../../components/section-cards'
import { UsersChart } from './UsersChart'

const Page = () => {
  return (
    <div className='space-y-10'>
      <SectionCards />
      <div className='flex h-fit w-full flex-col gap-2 lg:flex-row'>
        <UsersChart />
      </div>
    </div>
  )
}

export default Page
