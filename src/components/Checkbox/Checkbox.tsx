import React, {FC, useContext} from "react";
import styles from './Checkbox.module.css';
import cn from 'classnames';
import {Theme, THEME} from "../Theme";

type Props = {
    className?: string;
    onChange?: () => void;
    value: boolean;
};

export const Checkbox: FC<Props> = ({ children, onChange, className, value }) => {
    const { theme } = useContext(Theme);

    return (
        <label className={cn(styles.root, className)}>
            <input className={cn([styles.cb, theme === THEME.DARK ? styles.dark : ''])}
                   checked={value}
                   type="checkbox" onChange={onChange} />
            <span className={styles.cbStub} />
            {children}
        </label>
    );
};
