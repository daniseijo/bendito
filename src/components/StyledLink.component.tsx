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
        'transition-color relative px-6 py-2 duration-500 ease-in-out hover:bg-secondary-accent hover:text-typography-secondary',
        isActive && 'bg-secondary-main',
      )}
      {...otherProps}
    />
  )
}
