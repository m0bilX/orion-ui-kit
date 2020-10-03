import React, { FC } from "react";
import cn from 'classnames';

import styles from './ThemeTumbler.module.css';

type Props = {
    isActive: boolean;
    className?: string;
};

export const ThemeTumbler:FC<Props> = ({ className, isActive }) => {
    return <div className={cn([styles.root, className, isActive && styles.dark])}>
        <div className={cn(styles.inner, isActive && styles.isActive)} />
    </div>
}
