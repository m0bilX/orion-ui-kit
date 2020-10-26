import React, { FC } from "react";
import cn from 'classnames';
import styles from "./ErrorText.module.css";

type Props = {
    className?: string;
    onClick?: () => void;
};

export const ErrorText: FC<Props> = ({ children, className, onClick }) => {
    return (
        <div className={cn([styles.root, className])} onClick={onClick}>{children}</div>
    );
};
