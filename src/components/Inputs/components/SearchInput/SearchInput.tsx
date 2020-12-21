import React, {ChangeEvent, FC} from 'react'
import cn from 'classnames'
import {InputText} from '../InputText'
import {useTrans} from '../../../../hooks/useTrans'
import styles from './SearchInput.module.css'
import {Icon} from '../../../Icon'

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  className: string
}

export const SearchInput: FC<Props> = ({onChange, className}) => {
  const {translate} = useTrans()
  const placeholder = translate('search_placeholder', 'Search...')

  return (
    <div className={cn([styles.root, className])}>
      <InputText
        className={styles.input}
        onChange={onChange}
        placeholder={placeholder}
      />
      <Icon icon='search' className={styles.icon}/>
    </div>
  )
}
