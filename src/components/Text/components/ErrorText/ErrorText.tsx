import React, { FC, useContext } from "react";
import cn from 'classnames';
import { Theme, THEME } from "../../../Theme";
import styles from "./ErrorText.module.css";

type Props = {
    className?: string;
    onClick?: () => void;
};

export const ErrorText: FC<Props> = ({ children, className, onClick }) => {
    const {theme} = useContext(Theme);
    const dark = theme === THEME.DARK ? styles.dark : '';

    return (
        <div className={cn([styles.root, dark, className])} onClick={onClick}>{children}</div>
    );
};
