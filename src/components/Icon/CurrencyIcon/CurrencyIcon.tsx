import React, { FC, useContext } from 'react'
import { THEME, Theme } from '../../../hocs'
import { IconWrapper } from '../IconWrapper/IconWrapper'
import { CurrencyType } from './CurrencyType'
import { IconColorTypeThemed } from '../IconWrapper/IconColorType'

type Props = {
  icon: CurrencyType
  type?: IconColorTypeThemed

  className?: string
}

export const CurrencyIcon: FC<Props> = ({
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
      icon={icon.toLowerCase()}
      collection='currency'
      type={type}
      className={className}
    />
  )
}
