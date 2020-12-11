import React, { FC, useEffect, useRef, useState } from 'react'
import cn from 'classnames'
import styles from './Snackbar.module.css'
import { Icon } from '../../Icon'
import { SnackbarStateItem } from './SnackbarStateItem'

type Props = SnackbarStateItem & {
  onClose: (id: string) => void
}

export const Snackbar: FC<Props> = (props) => {
  const { onClose, id, lifeSpan = 5000, iconType, link, text, linkText } = props
  const rootElem = useRef<HTMLDivElement>(null)
  const timelineElem = useRef<HTMLDivElement>(null)
  const [isClosing, setIsClosing] = useState(false)
  const timeStart = useRef(new Date().getTime())
  const timeRest = useRef(lifeSpan)

  const closeHandler = () => {
    if (rootElem.current !== null) {
      rootElem.current.style.height = `${rootElem.current.offsetHeight}px`
    }
    setIsClosing(true)
  }

  useEffect(() => {
    let closeTimeout = setTimeout(() => setIsClosing(true), timeRest.current)
    let timelineTimeout: NodeJS.Timeout
    const startTimeLine = () => {
      if (timelineElem.current) {
        timelineElem.current.style.transition = `width ${timeRest.current}ms linear`
      }

      timelineTimeout = setTimeout(() => {
        if (timelineElem.current) {
          timeStart.current = new Date().getTime()
          timelineElem.current.style.width = `0`
        }
      }, 50)
    }

    startTimeLine()

    const snackbarClosing = () => {
      startTimeLine()

      closeTimeout = setTimeout(() => setIsClosing(true), timeRest.current)
    }

    const resetClosing = () => {
      if (timelineElem.current) {
        timeRest.current =
          timeRest.current - (new Date().getTime() - timeStart.current)
        timelineElem.current.style.width = `${timelineElem.current.offsetWidth}px`
      }
      clearTimeout(closeTimeout)
      clearTimeout(timelineTimeout)
    }

    if (rootElem.current !== null) {
      rootElem.current.style.height = `${rootElem.current.offsetHeight + 20}px`
      rootElem.current.addEventListener('mouseenter', resetClosing)
      rootElem.current.addEventListener('mouseleave', snackbarClosing)
    }

    return () => {
      resetClosing()

      if (rootElem.current !== null) {
        rootElem.current.removeEventListener('mouseenter', resetClosing)
        rootElem.current.removeEventListener('mouseleave', snackbarClosing)
      }
    }
  }, [])

  useEffect(() => {
    const onAnimationEnd = () => {
      if (rootElem && rootElem.current !== null && !isClosing) {
        rootElem.current.style.height = ``
      }
    }

    if (rootElem.current !== null) {
      if (isClosing) {
        rootElem.current.style.height = `0`

        setTimeout(() => {
          onClose(id)
        }, 500)
      } else {
        rootElem.current.addEventListener('animationend', onAnimationEnd)
      }
    }

    return () => {
      if (rootElem.current !== null) {
        rootElem.current.removeEventListener('animationend', onAnimationEnd)
      }
    }
  }, [isClosing])

  return (
    <div
      ref={rootElem}
      data-component='Snackbar'
      className={cn(styles.root, isClosing ? styles.fadeOut : styles.fadeIn)}
    >
      <div>
        <div className={styles.item}>
          {typeof iconType !== 'undefined' && (
            <Icon icon={iconType} className={styles.icon} />
          )}
          <div className={styles.inner}>
            <h3>{text}</h3>
            {typeof link !== 'undefined' && (
              <p>
                <a
                  href={link}
                  target='_blank'
                  rel='noreferrer'
                  className={styles.link}
                >
                  {linkText}
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
      <div onClick={closeHandler} className={styles.closeBtn}>
        <Icon icon='close' className={styles.closeIcon} />
      </div>
      <div className={styles.timeline} ref={timelineElem} />
    </div>
  )
}
