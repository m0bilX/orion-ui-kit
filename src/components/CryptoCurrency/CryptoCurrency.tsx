import React, {FC, useContext} from "react";
import cn from 'classnames';
import { Icon, ICON_TYPE } from "../Icon";
import { SubText } from "../Text";
import { THEME, Theme } from "../Theme";
import styles from "./CryptoCurrency.module.css";

type Props = {
    type: ICON_TYPE;
    className?: string;
};

export const CryptoCurrency: FC<Props> = ({ type, className = '', children }) => {
    const {theme} = useContext(Theme);
    const dark = theme === THEME.DARK ? styles.dark : '';

    return (
        <div className={cn([styles.root, dark, className])}>
            <Icon type={type} className={styles.iconWrapper} />
            <SubText className={styles.text}>{children}</SubText>
        </div>
    );
};
