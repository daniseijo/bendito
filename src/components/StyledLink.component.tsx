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
        'transition-color relative px-6 py-2 duration-200 ease-in-out after:scale-x-0 hover:bg-primary-accent hover:after:scale-x-100',
        isActive ? 'bg-primary-accent after:scale-x-100' : 'bg-typography-transparent',
      )}
      {...otherProps}
    />
  )
}
