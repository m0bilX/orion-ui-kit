import React, { FC, Key } from 'react'
import cn from 'classnames'
import styles from './ToggleTabs.module.css'

type Props = {
  selected: Key
  className?: string
  tabClassName?: string
  transparent?: boolean
  children: JSX.Element[]
  onTabChanged: (key: Key) => void
}

export const ToggleTabs: FC<Props> = ({
  children,
  className,
  tabClassName,
  transparent,
  selected,
  onTabChanged
}) => {
  return (
    <div
      className={cn([
        styles.root,
        { [styles.transparent]: transparent },
        className
      ])}
    >
      {children.map((child) => (
        <div
          key={child.key}
          className={cn(
            styles.tab,
            {
              [styles.selected]: child.key === selected
            },
            tabClassName
          )}
          onClick={() => onTabChanged(child.key!)}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
