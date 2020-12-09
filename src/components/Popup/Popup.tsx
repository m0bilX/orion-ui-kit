import React, { FC, useEffect } from 'react'
import cn from 'classnames'
import { Icon } from '../Icon'
import styles from './Popup.module.css'

type Props = {
  className?: string
  onClose: () => void
}

export const Popup: FC<Props> = (props) => {
  const { className, children, onClose } = props

  useEffect(() => {
    const closePopup = (e: any) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', closePopup)

    return () => document.removeEventListener('keydown', closePopup)
  }, [])

  return (
    <div className={cn([styles.root, className])}>
      <div className={styles.popup}>
        <div className={styles.closeButtonWrapper} onClick={onClose}>
          <Icon icon='close' className={styles.closeButton} />
        </div>
        {children}
      </div>
      <div className={styles.fader} onClick={onClose} />
    </div>
  )
}
