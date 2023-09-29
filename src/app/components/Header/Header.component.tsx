'use client'

import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { HeaderLinkList } from './HeaderLinkList.component'
import { HamburgerMenuButton } from './HamburgerMenuButton.component'
import logo from '../../../../public/logo.svg'
import { useState } from 'react'

export type HeaderProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>

export function Header({ className, ...otherProps }: HeaderProps) {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <header
      className={clsx(
        className,
        isOpen && 'h-60',
        'flex w-full justify-between px-6 py-2 transition-all delay-150 ease-in-out lg:justify-around lg:py-6',
      )}
      {...otherProps}
    >
      <Link className="m-0 md:flex" href="/">
        <Image className="h-16 w-fit lg:h-full" src={logo} alt="Bendito Bodorrio Logo" />
      </Link>
      <HeaderLinkList className="hidden md:flex md:flex-shrink-0 md:items-center" links={headerLinks} />
      <nav
        className={clsx(
          isOpen && 'max-h-60',
          '-ml-24 mt-24 max-h-0 w-full overflow-hidden transition-all delay-150 ease-in-out md:hidden',
        )}
      >
        <ul className="flex flex-col">
          {headerLinks.map(({ name, href }) => (
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

const headerLinks = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Services',
    href: '/services',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
]
