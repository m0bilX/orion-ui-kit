import React, {FC} from "react";
import cn from 'classnames';
import styles from "./Subtext.module.css";

type Props = {
    className?: string;
    onClick?: () => void;
};

export const SubText: FC<Props> = ({ children, className, onClick }) => {
    return (
        <div className={cn(['subtext', styles.root, className])} onClick={onClick}>{children}</div>
    );
};
