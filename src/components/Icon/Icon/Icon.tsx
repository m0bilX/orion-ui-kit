import React, { FC, useContext } from 'react'
import { THEME, Theme } from '../../../hocs'
import { IconWrapper } from '../IconWrapper/IconWrapper'
import { IconType } from './IconType'
import { IconColorTypeThemed } from '../IconWrapper/IconColorType'

type Props = {
  icon: IconType
  type?: IconColorTypeThemed
  className?: string
}

export const Icon: FC<Props> = ({ icon, type = 'theme', className = '' }) => {
  const { theme } = useContext(Theme)

  if (type === 'theme') {
    type = theme === THEME.DARK ? 'dark' : 'grey'
  }

  return (
    <IconWrapper
      icon={icon}
      collection='ui'
      type={type}
      className={className}
    />
  )
}
