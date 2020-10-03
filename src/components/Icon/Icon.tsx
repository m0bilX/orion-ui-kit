import React, {FC, useContext} from 'react';
import cn from 'classnames';
import { THEME, Theme } from "../Theme";
import { ICON_TYPE } from "./Icon.enums";
import { getIconSrc } from "./Icon.helpres";
import styles from './Icon.module.css';

type Props = {
    type: ICON_TYPE;
    className?: string;
};

export const Icon: FC<Props> = ({ className = '', type }) => {
    const { theme } = useContext(Theme);
    const iconSrc = getIconSrc(type, theme === THEME.DARK);
    const iconClassName = cn([styles.root, className]);

    return (
        <div className={iconClassName}>
            <img src={iconSrc} className={styles.img} />
        </div>
    );
};
