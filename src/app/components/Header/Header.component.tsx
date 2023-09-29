import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { HeaderLinkList } from './HeaderLinkList.component'
import { HamburgerMenuList } from './HamburgerMenuList.component'
import logo from '../../../../public/logo.svg'

export type HeaderProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>

export async function Header({ className, ...otherProps }: HeaderProps) {
  return (
    <header
      className={clsx(className, 'mx-auto flex  w-full justify-between px-6 py-2  lg:justify-around lg:py-6')}
      {...otherProps}
    >
      <Link className="flex" href="/">
        <Image src={logo} alt="Bendito Bodorrio Logo" style={{ width: 'fit-content', height: '100%' }} />
      </Link>
      <HamburgerMenuList className="flex lg:hidden" links={headerLinks} />
      <HeaderLinkList className="hidden lg:flex lg:flex-shrink-0 lg:items-center" links={headerLinks} />
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
