import React, {FC} from 'react'
import cn from 'classnames'
import styles from './Radio.module.css'

export const Radio: FC<React.HTMLProps<HTMLInputElement>> = (otherProps) => {
  const {className, children, checked} = otherProps

  return (
    <label className={cn([styles.root, className])}>
      <input {...{...otherProps, children: undefined}} type='radio'/>
      <div className={cn(styles.point, {[styles.pointActive]: checked})}/>
      {children}
    </label>
  )
}
