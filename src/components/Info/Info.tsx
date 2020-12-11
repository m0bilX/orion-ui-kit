import React, { FC } from 'react'
import cn from 'classnames'
import styles from './Info.module.css'
import { Icon } from '../Icon'

type Props = {
  className?: string
}

export const Info: FC<Props> = ({ className = '', children }) => {
  return (
    <div className={cn([styles.root, className])}>
      <Icon className={styles.icon} icon='info' />
      <small className={styles.label}>{children}</small>
    </div>
  )
}
