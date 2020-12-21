import React, {VFC} from 'react'
import cn from 'classnames'
import styles from './InputText.module.css'

export const InputText: VFC<React.HTMLProps<HTMLInputElement>> = (
  otherProps
) => {
  const {className} = otherProps

  return (
    <input
      {...otherProps}
      className={cn([styles.root, className])}
      type='text'
    />
  )
}
