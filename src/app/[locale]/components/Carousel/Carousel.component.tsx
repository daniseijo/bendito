'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper'

// Import Swiper styles
import 'swiper/css'
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
    <div className={clsx(className, 'relative')}>
      <ChevronLeftIcon
        className="absolute left-0 top-1/2 z-10 w-10 -translate-y-1/2 transform cursor-pointer lg:w-24"
        onClick={() => swiperRef.current?.slidePrev()}
      />
      <Swiper
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

      <ChevronRightIcon
        className="absolute right-0 top-1/2 z-10 w-10 -translate-y-1/2 transform cursor-pointer lg:w-24"
        onClick={() => swiperRef.current?.slideNext()}
      />
    </div>
  )
}
