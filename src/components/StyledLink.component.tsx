import React, { HTMLProps } from 'react'
import clsx from 'clsx'
import Link from 'next/link'

export type StyledLinkProps = React.PropsWithChildren & {
  className?: any
} & Pick<HTMLProps<HTMLAnchorElement>, 'role'> & {
    href: string
    isActive?: boolean
  }

export function StyledLink({ className, isActive, ...otherProps }: StyledLinkProps) {
  return (
    <Link
      className={clsx(
        className,
        'transition-color relative duration-200 ease-in-out after:scale-x-0 hover:text-primary-accent hover:after:scale-x-100',
        isActive ? 'text-primary-accent after:scale-x-100' : 'text-typography-main',
        'underline-animation',
      )}
      {...otherProps}
    />
  )
}
