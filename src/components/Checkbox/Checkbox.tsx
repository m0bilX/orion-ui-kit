import React, {FC} from 'react'
import styles from './Checkbox.module.css'
import cn from 'classnames'

export const Checkbox: FC<React.HTMLProps<HTMLInputElement>> = (otherProps) => {
  const {className, children} = otherProps

  return (
    <label className={cn(styles.root, className)}>
      <input
        {...{...otherProps, children: undefined}}
        className={styles.cb}
        type='checkbox'
      />
      <span className={styles.cbStub}/>
      {children}
    </label>
  )
}
