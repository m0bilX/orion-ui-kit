import React, {FC, useEffect, useState} from 'react'
import cn from 'classnames'
import {Icon} from '../Icon'
import styles from './Popup.module.css'

type Props = {
  className?: string
  onClose: () => void
}

export const Popup: FC<Props> = (props) => {
  const [fadingOut, setFadingOut] = useState(false)
  const {className, children, onClose} = props

  const onAnimationEnd = () => {
    if (fadingOut) {
      onClose()
    }
  }

  const onCloseAnimation = () => {
    setFadingOut(true)
  }

  useEffect(() => {
    const closePopup = (e: any) => {
      if (e.key === 'Escape') {
        onCloseAnimation()
      }
    }

    document.addEventListener('keydown', closePopup)

    return () => document.removeEventListener('keydown', closePopup)
  }, [])

  return (
    <div
      className={cn([styles.root, className], {
        [styles.fadeOut]: fadingOut
      })}
    >
      <div className={styles.popup} onAnimationEnd={onAnimationEnd}>
        <div className={styles.closeButtonWrapper} onClick={onCloseAnimation}>
          <Icon icon='close' className={styles.closeButton}/>
        </div>
        {children}
      </div>
      <div className={styles.fader} onClick={onCloseAnimation}/>
    </div>
  )
}
