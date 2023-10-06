import clsx from 'clsx'
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

export type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  variant?: 'contained' | 'outlined'
}

export function Button({ variant = 'contained', className, children, ...otherProps }: ButtonProps) {
  const variantClass = useVariant(variant)
  return (
    <button
      className={clsx(
        className,
        variantClass,
        'border-2 px-10 py-3 text-sm uppercase transition-colors duration-100 ease-in-out disabled:cursor-not-allowed disabled:opacity-50',
      )}
      {...otherProps}
    >
      {children}
    </button>
  )
}

function useVariant(variant: 'contained' | 'outlined'): string {
  if (variant === 'contained') {
    return 'bg-secondary-main border-transparent enabled:hover:bg-secondary-accent enabled:hover:text-typography-secondary enabled:active:bg-secondary-main'
  } else {
    return 'bg-transparent border-secondary-main enabled:hover:bg-secondary-main enabled:active:bg-transparent'
  }
}
