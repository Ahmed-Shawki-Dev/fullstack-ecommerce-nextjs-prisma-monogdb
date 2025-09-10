import { getServerSession } from 'next-auth'

const ProfilePage = async () => {
  const session = await getServerSession()
  console.log(session?.user)
  return (
    <section className='pt-20'>
      <div className='overflow-hidden rounded-lg border shadow'>
        <div className='px-4 py-5 sm:px-6'>
          <h3 className='text-lg leading-6 font-medium'>User Profile</h3>
          <p className='mt-1 max-w-2xl text-sm'>
            This is some information about the user.
          </p>
        </div>
        <div className='border-t px-4 py-5 sm:p-0'>
          <dl className='sm:divide-y'>
            <div className='py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
              <dt className='text-sm font-medium'>Full Name</dt>
              <dd className='mt-1 text-sm sm:col-span-2 sm:mt-0'>
                {session?.user?.name}
              </dd>
            </div>
            <div className='py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
              <dt className='text-sm font-medium'>Email Address</dt>
              <dd className='mt-1 text-sm sm:col-span-2 sm:mt-0'>
                {session?.user?.email}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}

export default ProfilePage
