import React, {FC} from "react";
import cn from 'classnames';
import { Icon, ICON_TYPE } from "../Icon";
import styles from "./CryptoCurrency.module.css";

type Props = {
    type: ICON_TYPE;
    className?: string;
};

export const CryptoCurrency: FC<Props> = ({ type, className = '', children }) => {
    return (
        <div className={cn([styles.root, className])}>
            <Icon type={type} className={styles.iconWrapper} />
            <small className={styles.text}>{children}</small>
        </div>
    );
};
