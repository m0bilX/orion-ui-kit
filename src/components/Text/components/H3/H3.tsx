import React, {FC} from "react";
import cn from 'classnames';
import styles from "./H3.module.css";

type Props = {
    className?: string;
};

export const H3: FC<Props> = ({ children, className = '' }) => {
    return (
        <div className={cn([styles.root, className])}>{children}</div>
    );
};
