'use client'

import { Button, ButtonProps } from '@material-tailwind/react'
import clsx from 'clsx'
import { Ref } from 'react'

function MaterialButton({ className, ...otherProps }: ButtonProps & { ref?: Ref<HTMLButtonElement> }) {
  return <Button className={clsx(className, 'bg-secondary-main')} {...otherProps} />
}

export default MaterialButton
