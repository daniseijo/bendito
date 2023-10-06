import { ExtendableStyles } from '@/utils/types'
import clsx from 'clsx'

export type TitleProps = ExtendableStyles & {
  title: string
  subtitle: string
}

export default function Title({ title, subtitle, ...otherProps }: TitleProps) {
  return (
    <div {...otherProps}>
      <h1 className="mb-6">{title}</h1>
      <p className="text-xl text-secondary-main">{subtitle}</p>
    </div>
  )
}
