import React, { FC } from 'react'
import cn from 'classnames'
import { Icon } from '../Icon'
import styles from './Arrow.module.css'

type Props = {
  className: string
  isUp?: boolean
}

export const Arrow: FC<Props> = ({ className, isUp }) => {
  return (
    <div className={cn(className, { [styles.up]: isUp })}>
      <Icon icon='dropdown' />
    </div>
  )
}
