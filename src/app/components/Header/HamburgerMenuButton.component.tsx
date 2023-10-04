'use client'

import { Dispatch, SetStateAction } from 'react'
import { ExtendableStyles } from '@/utils/types'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Bars3Icon } from '@heroicons/react/20/solid'

export type HamburgerMenuButtonProps = ExtendableStyles & {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export type HeaderLinkData = {
  name: React.ReactNode
  href: string
}

export function HamburgerMenuButton({ isOpen, setIsOpen, ...otherProps }: HamburgerMenuButtonProps) {
  return (
    <div {...otherProps}>
      {!isOpen ? (
        <button type="button" className="text-secondary-accent" onClick={() => setIsOpen(true)}>
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      ) : (
        <button type="button" className="text-secondary-accent" onClick={() => setIsOpen(false)}>
          <span className="sr-only">Close menu</span>
          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      )}
    </div>
  )
}
