import React, { FC } from 'react'
import styles from './ModalContainer.module.css'
import cn from 'classnames'

type Props = {
  visibleNoAnim: boolean
  visible: boolean
  onModalClick: () => void
}

export const ModalContainer: FC<Props> = ({
  visibleNoAnim,
  visible,
  onModalClick,
  children
}) => {
  return (
    <div
      className={cn(styles.modalContainer, {
        [styles.visibleNoAnim]: visibleNoAnim,
        [styles.visible]: visible
      })}
    >
      <div className={styles.popupFader} onClick={onModalClick} />
      {children}
    </div>
  )
}
