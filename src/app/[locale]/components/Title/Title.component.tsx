import { ExtendableStyles } from '@/utils/types'
import clsx from 'clsx'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
})

export type TitleProps = ExtendableStyles & {
  title: string
  subtitle: string
}

export default function Title({ title, subtitle, ...otherProps }: TitleProps) {
  return (
    <div {...otherProps}>
      <h1 className="mb-6">{title}</h1>
      <p className={clsx(poppins.className, 'text-xl text-secondary-main')}>{subtitle}</p>
    </div>
  )
}
