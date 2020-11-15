import React, { FC } from 'react'
import cn from 'classnames'
import styles from './Button.module.css'

type Props = {
  type: 'transparent' | 'primary' | 'light' | 'lighter' | 'empty' | 'border'
}

export const Button: FC<Props & React.HTMLProps<HTMLButtonElement>> = ({
  type = 'light',
  ...otherProps
}) => {
  const { children, className } = otherProps

  return (
    <button
      {...otherProps}
      className={cn([styles[type], className])}
      type='button'
    >
      {children}
    </button>
  )
}
