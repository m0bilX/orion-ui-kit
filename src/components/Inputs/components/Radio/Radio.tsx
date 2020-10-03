import React, {ChangeEvent, FC, useContext} from 'react';
import cn from 'classnames';
import { THEME, Theme } from "../../../Theme";
import styles from './Radio.module.css';

type Props = {
    name: string;
    value: string;
    isActive: boolean;
    className?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Radio: FC<Props> = (props) => {
    const { name, value, className = '', children, onChange, isActive } = props;
    const { theme } = useContext(Theme);
    const dark = theme === THEME.DARK ? styles.dark : '';

    return (
        <label className={cn([styles.root, dark, className])}>
            <input type="radio" name={name} value={value} onChange={onChange} checked={isActive} />
            <div className={cn([styles.point, isActive ? styles.pointActive : ''])} />
            {children}
        </label>
    );
};
