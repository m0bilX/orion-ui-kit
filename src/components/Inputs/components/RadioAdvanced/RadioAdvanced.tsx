import React, {FC} from 'react'
import cn from 'classnames'
import styles from './RadioAdvanced.module.css'
import {Radio} from '../Radio'

export const RadioAdvanced: FC<React.HTMLProps<HTMLInputElement>> = (props) => {
  const {className = '', checked, children} = props
  const labelClassName = cn(styles.label, {[styles.labelActive]: checked})
  const rootClassName = cn([styles.root, className])

  return (
    <Radio {...props} className={rootClassName}>
      <small className={labelClassName}>{children}</small>
    </Radio>
  )
}
