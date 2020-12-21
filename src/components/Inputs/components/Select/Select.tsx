import React, {FC} from 'react'
import cn from 'classnames'
import {Arrow} from '../../../Arrow'
import styles from './Select.module.css'

export const Select: FC<React.HTMLProps<HTMLSelectElement>> = (otherProps) => {
  const {className, children} = otherProps

  return (
    <div className={cn([styles.root])}>
      <select {...otherProps} className={cn([styles.select, className])}>
        {children}
      </select>
      <Arrow className={styles.arrow}/>
    </div>
  )
}
