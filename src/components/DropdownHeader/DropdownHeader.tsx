import React, { FC } from 'react';
import cn from 'classnames';
import {Arrow} from "../Arrow";
import styles from './DropdownHeader.module.css';

type Props = {
    className?: string;
    onClick?: () => void;
    isActive?: boolean;
    shouldShowArrow?: boolean;
    isSmall?: boolean;
};

export const DropdownHeader: FC<Props> = ({ className, isSmall, onClick, isActive, shouldShowArrow = true, children }) => {
    return (
        <div className={cn([styles.root, className])} onClick={onClick}>
            {children}
            {shouldShowArrow && <Arrow className={cn(styles.arrow, isSmall && styles.isSmall)} isUp={isActive} />}
        </div>
    );
};
