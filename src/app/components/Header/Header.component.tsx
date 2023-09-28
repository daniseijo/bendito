import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { HeaderLinkList } from './HeaderLinkList.component'

export type HeaderProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>

export async function Header({ className, ...otherProps }: HeaderProps) {
  return (
    <header className={clsx(className, 'content', 'flex justify-around')} {...otherProps}>
      <Link className="relative h-auto w-28" href="/">
        <Image src="/logo.svg" alt="Bendito Bodorrio Logo" className="dark:invert" width={100} height={24} priority />
      </Link>
      <HeaderLinkList className="flex flex-shrink-0 items-center" links={headerLinks} />
    </header>
  )
}

const headerLinks = [
  {
    name: 'Services',
    href: '/services',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
]
