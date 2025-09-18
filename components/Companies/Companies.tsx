'use client'
import { companiesDataObj } from '../../data'
import LogoLoop from './LogoLoop'

const Companies = () => {
  return (
    <section
      className='flex min-h-fit items-start justify-center px-8 pt-8'
    >
      <div className='mx-auto flex w-full max-w-screen-xl flex-col items-center gap-8'>
        <LogoLoop
          logos={companiesDataObj}
          speed={50}
          direction='left'
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          ariaLabel='Technology Skills'
        />
      </div>
    </section>
  )
}

export default Companies
