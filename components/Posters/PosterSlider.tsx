'use client'
import Autoplay from 'embla-carousel-autoplay'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

const data = {
  covers: [
    {
      id: 1,
      pc: '/images/p1.webp',
      mobile: '/images/p1m.webp',
    },
    {
      id: 3,
      pc: '/images/p3.webp',
      mobile: '/images/p3m.webp',
    },
    {
      id: 4,
      pc: '/images/p4.webp',
      mobile: '/images/p4m.webp',
    },
  ],
}

export default function PosterSlider() {
  return (
    <Carousel
      className='w-full max-w-sm p-0 md:max-w-full lg:max-w-full'
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent className='p-0'>
        {data.covers.map((cover) => (
          <CarouselItem key={cover.id}>
            <Card className='rounded-xl p-0'>
              <CardContent className='relative h-100 w-full p-0 lg:h-130'>
                <picture>
                  <source media='(max-width: 640px)' srcSet={cover.mobile} />
                  <source media='(min-width: 641px)' srcSet={cover.pc} />
                  <img
                    src={cover.pc}
                    alt='Cover'
                    className='h-full w-full rounded-xl object-cover select-none'
                  />
                </picture>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
