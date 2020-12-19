import React, { FC, useContext } from 'react'
import { THEME, Theme } from '../../../hocs'
import { IconWrapper } from '../IconWrapper/IconWrapper'
import { ExchangeType } from './ExchangeType'
import { IconColorTypeThemed } from '../IconWrapper/IconColorType'

type Props = {
  icon: ExchangeType
  type?: IconColorTypeThemed
  className?: string
}

export const ExchangeIcon: FC<Props> = ({
  className = '',
  type = 'theme',
  icon
}) => {
  const { theme } = useContext(Theme)

  if (type === 'theme') {
    type = theme === THEME.DARK ? 'grey' : 'color'
  }
  return (
    <IconWrapper
      icon={icon}
      collection='exchange'
      type={type}
      className={className}
    />
  )
}
