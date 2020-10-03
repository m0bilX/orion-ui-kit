import React, {FC, useContext, useEffect} from 'react';
import cn from 'classnames';
import { Icon, ICON_TYPE } from "../Icon";
import {THEME, Theme} from "../Theme";
import styles from './Popup.module.css';

type Props = {
    className?: string;
    onClose: () => void;
};

export const Popup: FC<Props> = (props) => {
    const { className = '', children, onClose } = props;
    const {theme} = useContext(Theme);
    const dark = theme === THEME.DARK ? styles.dark : '';

    useEffect(() => {
        const closePopup = (e: any) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', closePopup);

        return () => document.removeEventListener('keydown', closePopup);
    }, []);

    return (
        <div className={cn([styles.root, dark, className])}>
            <div className={styles.popup}>
                <div className={styles.closeButtonWrapper} onClick={onClose}>
                    <Icon type={ICON_TYPE.CLOSE} className={styles.closeButton}/>
                </div>
                {children}
            </div>
            <div className={styles.fader} onClick={onClose} />
        </div>
    );
};
