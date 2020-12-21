import React, {FC, Key} from 'react'
import cn from 'classnames'
import styles from './BigTabs.module.css'

type Props = {
  selected: Key
  className?: string
  children: JSX.Element[]
  onTabChanged: (key: Key) => void
}

export const BigTabs: FC<Props> = ({
                                     children,
                                     className,
                                     selected,
                                     onTabChanged
                                   }) => {
  return (
    <div className={cn([styles.root, className])}>
      {children.map((child) => (
        <div
          key={child.key}
          className={cn(styles.tab, {
            [styles.selected]: child.key === selected
          })}
          onClick={() => onTabChanged(child.key!)}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
