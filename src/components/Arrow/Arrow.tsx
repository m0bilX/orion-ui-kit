import React, { FC } from 'react'
import cn from 'classnames'
import { Icon, ICON_TYPE } from '../Icon'
import styles from './Arrow.module.css'

type Props = {
  className: string
  isUp?: boolean
}

export const Arrow: FC<Props> = ({ className, isUp }) => {
  return (
    <div className={cn(className, { [styles.up]: isUp })}>
      <Icon type={ICON_TYPE.DROPDOWN} />
    </div>
  )
}
