import React, { FC } from 'react'
import cn from 'classnames'
import styles from './IconWrapper.module.css'
import { IconColorType } from './IconColorType'

type Props = {
  icon: string
  collection?: 'ui' | 'currency' | 'exchange'
  type?: IconColorType
  className?: string
}

export const IconWrapper: FC<Props> = ({
  icon,
  collection = 'ui',
  type,
  className = ''
}) => {
  const iconSrc = `/img/icons/${collection}/${icon}/${type}.svg`

  return (
    <div className={cn([styles.root, className])}>
      <img src={iconSrc} className={styles.img} alt='' draggable={false} />
    </div>
  )
}
