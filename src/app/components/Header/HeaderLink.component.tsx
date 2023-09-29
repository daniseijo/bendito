'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { StyledLink, StyledLinkProps } from '@/components/StyledLink.component'

export type HeaderLinkProps = StyledLinkProps

export function HeaderLink({ href, ...otherProps }: HeaderLinkProps) {
  const pathname = `/${usePathname().split('/')[1]}`
  const isLinkActive = href === pathname

  return <StyledLink href={href} isActive={isLinkActive} {...otherProps} />
}
