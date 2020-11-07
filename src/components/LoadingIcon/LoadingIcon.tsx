import React from 'react'
import styles from './LoadingIcon.module.css'

export function LoadingIcon() {
  return <div className={styles.root}>{new Array(8).fill(<div />)}</div>
}
