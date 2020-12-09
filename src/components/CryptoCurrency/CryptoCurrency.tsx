import React, { FC } from 'react'
import cn from 'classnames'
import { CurrencyIcon, CurrencyType } from '../Icon'
import styles from './CryptoCurrency.module.css'
import { IconColorTypeThemed } from '../Icon/IconWrapper/IconColorType'

type Props = {
  icon: CurrencyType
  type?: IconColorTypeThemed
  className?: string
}

export const CryptoCurrency: FC<Props> = ({
  icon,
  type = 'theme',
  className = '',
  children
}) => {
  return (
    <div className={cn([styles.root, className])}>
      <CurrencyIcon icon={icon} className={styles.iconWrapper} type={type} />
      <small className={styles.text}>{children}</small>
    </div>
  )
}
