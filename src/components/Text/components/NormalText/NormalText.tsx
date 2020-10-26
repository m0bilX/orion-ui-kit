import React, {FC} from "react";
import cn from 'classnames';
import styles from "./NormalText.module.css";

type Props = {
    className?: string;
};

export const NormalText: FC<Props> = ({ children, className = '' }) => {
    return (
        <div className={cn([styles.root, className])}>{children}</div>
    );
};
