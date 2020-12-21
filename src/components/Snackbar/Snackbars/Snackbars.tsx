import React, {FC} from 'react'
import styles from './Snackbars.module.css'
import cn from 'classnames'
import {Snackbar, SnackbarStateItem} from '../Snackbar'

type Props = {
  snackbars: SnackbarStateItem[]
  onClose: (id: string) => void
}

export const Snackbars: FC<Props> = ({snackbars, onClose}) => {
  return (
    <div
      className={cn([styles.root, snackbars.length > 0 && styles.isVisible])}
    >
      {snackbars.map((snackbar) => (
        <Snackbar {...snackbar} onClose={onClose} key={snackbar.id}/>
      ))}
    </div>
  )
}
