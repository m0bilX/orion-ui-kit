import React, {FC, useContext} from 'react';
import cn from 'classnames';
import { BUTTON_TYPE } from "./Button.enums";
import styles from './Button.module.css';
import {THEME, Theme} from "../Theme";

type Props = {
    onClick?: () => void;
    type: BUTTON_TYPE;
    isDisabled?: boolean;
    className?: string;
};

const getClassName = (type: BUTTON_TYPE) => {
    // TODO: Добавить типы для всех видов кнопок
    switch (type) {
        case BUTTON_TYPE.TRANSPARENT:
            return styles.transparent;
        case BUTTON_TYPE.PRIMARY:
            return styles.primary;
        case BUTTON_TYPE.LITE:
            return styles.btnLite;
        default:
            return 'btn-light';
    }
};

export const Button: FC<Props> = (props) => {
    const { children, onClick, type = BUTTON_TYPE.LITE, isDisabled = false, className = '' } = props;
    const {theme} = useContext(Theme);
    const dark = theme === THEME.DARK ? styles.dark : '';
    const buttonClassName = getClassName(type);
    const rootClassName = cn([buttonClassName, className, dark]);

    return (
        <button type="button" className={rootClassName} onClick={!isDisabled ? onClick : undefined} disabled={isDisabled}>
            {children}
        </button>
    );
};
