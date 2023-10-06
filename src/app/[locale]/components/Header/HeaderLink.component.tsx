'use client'

import React from 'react'
import { useParams, usePathname } from 'next/navigation'
import { StyledLink, StyledLinkProps } from '@/components/StyledLink.component'
import { getFirstPathFromPathname, removeLocaleFromPathname } from '@/utils/url/url.helpers'

export type HeaderLinkProps = StyledLinkProps

export function HeaderLink({ href, ...otherProps }: HeaderLinkProps) {
  const pathname = usePathname()
  const params = useParams<{ locale: string }>()

  const mainPathname = getFirstPathFromPathname(removeLocaleFromPathname(pathname, params.locale))
  const isLinkActive = href === mainPathname

  return <StyledLink href={href} isActive={isLinkActive} {...otherProps} />
}
