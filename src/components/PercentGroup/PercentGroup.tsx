import React, { FC } from 'react'
import styles from './PercentGroup.module.css'
import { Button } from '../Button'

interface Props {
  clickPercent: (percent: number) => void
}

export const PercentGroup: FC<Props> = ({ clickPercent }) => {
  return (
    <div className={styles.root}>
      <Button
        className={styles.percent}
        type='light'
        onClick={() => clickPercent(0.25)}
      >
        25%
      </Button>
      <Button
        className={styles.percent}
        type='light'
        onClick={() => clickPercent(0.5)}
      >
        50%
      </Button>
      <Button
        className={styles.percent}
        type='light'
        onClick={() => clickPercent(0.75)}
      >
        75%
      </Button>
      <Button
        className={styles.percent}
        type='light'
        onClick={() => clickPercent(1)}
      >
        100%
      </Button>
    </div>
  )
}
