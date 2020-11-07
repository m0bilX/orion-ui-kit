import React, { FC, useState } from 'react';
import cn from 'classnames';
import styles from './Accordion.module.css';
import { DropdownHeader } from "../DropdownHeader";

type Props = {
    className?: string;
    title: string;
    isSmall?: boolean;
};

export const Accordion: FC<Props> = ({ className = '', isSmall, title, children }) => {
    const [shouldShowDropdown, setShouldShowDropdown] = useState(false);

    return (
        <div className={cn([styles.root, className])}>
            <DropdownHeader
                onClick={() => setShouldShowDropdown(!shouldShowDropdown)}
                className={styles.header}
                isSmall={isSmall}
            >
                {isSmall ? (
                    <h4 className={styles.dropdownHeaderH3}>{title}</h4>
                ) : (
                    <h3 className={styles.dropdownHeaderH3}>{title}</h3>
                )}

            </DropdownHeader>
            {shouldShowDropdown && (
                <div className={styles.dropdown}>
                    {children}
                </div>
            )}
        </div>
    );
};
