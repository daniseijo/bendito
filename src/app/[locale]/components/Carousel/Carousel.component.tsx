'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Navigation } from 'swiper/modules'
import clsx from 'clsx'
import { ExtendableStyles } from '@/utils/types'
import { useRef } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { CarouselImage } from './Carousel.types'

export type CarouselProps = ExtendableStyles & {
  imagesList: CarouselImage[]
}

export function Carousel({ imagesList, className, ...otherProps }: CarouselProps) {
  const swiperRef = useRef<SwiperType>()

  return (
    <div className={clsx(className, 'flex h-auto w-auto items-center justify-center')}>
      <ChevronLeftIcon className="w-12 lg:w-36" onClick={() => swiperRef.current?.slidePrev()} />
      <Swiper
        className="h-auto w-full"
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        slidesPerView={1}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay, Navigation]}
        {...otherProps}
      >
        {imagesList.map((image) => (
          <SwiperSlide key={image.src}>
            <Image priority={true} width={image.width} height={image.height} alt={image.alt} src={image.src} />
          </SwiperSlide>
        ))}
      </Swiper>

      <ChevronRightIcon className="w-12 lg:w-36" onClick={() => swiperRef.current?.slideNext()} />
    </div>
  )
}
