import React from 'react'
import cn from 'classnames'
import styles from './LoadingIcon.module.css'

type Props = {
  className?: string
}

export const LoadingIcon: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn(styles.root, className)}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}
