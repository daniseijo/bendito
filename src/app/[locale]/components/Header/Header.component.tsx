'use client'

import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { HeaderLinkData, HeaderLinkList } from './HeaderLinkList.component'
import { HamburgerMenuButton } from './HamburgerMenuButton.component'
import logo from '../../../../../public/logo.svg'
import { useEffect, useState } from 'react'
import { ExtendableStyles } from '@/utils/types'

export type HeaderProps = ExtendableStyles & {
  links: HeaderLinkData[]
}

export function Header({ links, className, ...otherProps }: HeaderProps) {
  let [isOpen, setIsOpen] = useState(false)
  let [isScrolling, setScrolling] = useState(false)

  const handleScroll = () => setScrolling(window.scrollY > 40)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={clsx(
        className,
        'flex  w-full justify-between px-6 py-2 transition-all delay-150 ease-in-out lg:justify-around lg:py-6 lg:delay-75',
        isScrolling ? 'lg:h-20' : 'lg:h-40',
        isOpen ? 'h-60' : 'h-20',
      )}
      {...otherProps}
    >
      <Link className="m-0 md:flex" href="/">
        <Image
          className="h-16 w-fit transition-transform delay-150 ease-in-out lg:h-full"
          src={logo}
          alt="Bendito Bodorrio Logo"
        />
      </Link>
      <HeaderLinkList className="hidden md:flex md:flex-shrink-0 md:items-center" links={links} />
      <nav
        className={clsx(
          isOpen && 'max-h-60',
          '-ml-24 mt-24 max-h-0 w-full overflow-hidden transition-all delay-150 ease-in-out md:hidden',
        )}
      >
        <ul className="flex flex-col">
          {links.map(({ name, href }) => (
            <li className="pb-5" key={`${href}-${name}`}>
              <a href={href}>{name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <HamburgerMenuButton className="mt-5 md:hidden" isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  )
}
