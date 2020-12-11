import React, { FC, useContext, useEffect, useState } from 'react'
import cn from 'classnames'
import styles from './Sidebar.module.css'
import { Theme } from '../Theme'
import { Icon, IconType } from '../Icon'
import { Language } from '../Language'
import { useTrans } from '../../hooks/useTrans'

type Button = {
  name: string
  icon: IconType
  selected: boolean
  onClick: () => void
  className?: string
}

type Props = {
  buttons: (Button | false)[]
  mobile?: JSX.Element | JSX.Element[]
  onClose: () => void
  onDisconnectWallet?: () => void
}

export const Sidebar: FC<Props> = ({ buttons, onClose, mobile }) => {
  const { toggleTheme } = useContext(Theme)
  const { translate } = useTrans()
  const darkMode = translate('dark_mode', 'Dark Mode')

  const [isOpen, setIsOpen] = useState(false)

  const close = () => setIsOpen(false)

  useEffect(() => {
    document.body.addEventListener('click', close)
    return function cleanup() {
      document.body.removeEventListener('click', close)
    }
  })

  return (
    <div>
      <div
        className={cn(styles.root, { [styles.open]: isOpen })}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={close}
      >
        <div className={styles.content}>
          <Icon icon='logo' className={styles.logo} />

          {buttons.filter(Boolean).map((button: Button) => {
            const { icon, name, selected, className, onClick } = button
            return (
              <div
                key={name}
                onClick={onClick}
                className={cn(
                  styles.button,
                  {
                    [styles.selected]: selected
                  },
                  className
                )}
              >
                <Icon
                  icon={(icon + (selected ? 'Selected' : '')) as IconType}
                  className={styles.buttonIcon}
                />
                {translate(name)}
              </div>
            )
          })}

          <div
            className={cn(styles.button, styles.toggleThemeButton)}
            onClick={() => {
              toggleTheme()
              close()
            }}
          >
            <Icon icon='theme' className={styles.themeSwitch} />
            {darkMode}
          </div>

          <Language />
        </div>
      </div>

      <div className={styles.mobileSidebar}>
        <div
          onClick={() => {
            onClose()
            setIsOpen(!isOpen)
          }}
        >
          <Icon icon='logo' className={styles.mobileLogo} />
        </div>
        <div
          onClick={() => {
            onClose()
            setIsOpen(!isOpen)
          }}
        >
          <Icon icon='menu' className={styles.menu} />
        </div>

        {mobile}
      </div>
    </div>
  )
}
