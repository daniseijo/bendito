import { HeaderLink } from './HeaderLink.component'

export type HeaderLinkListProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
  links: HeaderLinkData[]
}

export type HeaderLinkData = {
  name: React.ReactNode
  href: string
}

export function HeaderLinkList({ className, links, ...otherProps }: HeaderLinkListProps) {
  return (
    <nav className={className} {...otherProps}>
      <ul className="flex justify-between gap-4">
        {links.map(({ name, href }) => (
          <li key={`${href}-${name}`}>
            <HeaderLink href={href}>{name}</HeaderLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
