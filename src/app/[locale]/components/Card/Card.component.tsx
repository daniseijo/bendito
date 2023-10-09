'use client'

import { Button } from '@/components/Button.component'
import { ExtendableStyles } from '@/utils/types'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { useIntersectionObserver } from 'usehooks-ts'

export type CardProps = ExtendableStyles & {
  title: string
  text: string
  link: {
    title: string
    href: string
  }
  image: {
    src: string
    alt: string
  }
}

export function Card({ title, text, link, image, className, ...otherProps }: CardProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, { freezeOnceVisible: true })
  const isVisible = !!entry?.isIntersecting

  return (
    <div
      ref={ref}
      className={clsx(
        className,
        'from-primary-darker flex w-full flex-wrap bg-gradient-to-r to-primary-accent p-8 lg:flex-nowrap ',
      )}
      {...otherProps}
    >
      <div
        className={clsx(
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0',
          'flex h-full w-full flex-col items-center  transition-all duration-1000 ease-out lg:items-start lg:pr-8',
        )}
      >
        <h2>{title}</h2>
        <p className="mt-8 w-full text-sm">{text}</p>

        <Link className="mt-8 lg:mt-24" href={link.href} passHref>
          <Button variant="contained">{link.title}</Button>
        </Link>
      </div>
      <Image
        className={clsx(
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0',
          'mt-8 h-full w-full transition-all duration-1000 ease-out lg:mt-0',
        )}
        height={600}
        width={875}
        src={image.src}
        alt={image.alt}
      />
    </div>
  )
}

//   return (
//     <div className={clsx(className, 'from-primary-darker  w-full bg-gradient-to-r to-primary-accent p-4')}>
//       <h2>{title}</h2>
//       <br />
//       <span>{text}</span>

//       <Link href="/about">Nuestros servicios</Link>
//       <Button className="mt-4" variant="outlined" disabled>
//         Click me!
//       </Button>
//     </div>
//   )
// }
