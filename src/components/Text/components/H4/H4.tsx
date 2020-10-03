import React, {FC, useContext} from "react";
import cn from 'classnames';
import { Theme, THEME } from "../../../Theme";
import styles from "./H4.module.css";

type Props = {
    className?: string;
};

export const H4: FC<Props> = ({ children, className = '' }) => {
    const {theme} = useContext(Theme);
    const dark = theme === THEME.DARK ? styles.dark : '';

    return (
        <div className={cn([styles.root, dark, className])}>{children}</div>
    );
};
