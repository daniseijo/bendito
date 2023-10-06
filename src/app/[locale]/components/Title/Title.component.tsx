import { ExtendableStyles } from '@/utils/types'
import clsx from 'clsx'

export type TitleProps = ExtendableStyles & {
  title: string
  subtitle: string
}

export default function Title({ title, subtitle, className, ...otherProps }: TitleProps) {
  return (
    <div className={clsx(className, 'text-center md:text-start')} {...otherProps}>
      <h1 className="mb-6">{title}</h1>
      <p className="text-xl text-secondary-main">{subtitle}</p>
    </div>
  )
}
