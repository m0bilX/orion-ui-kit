import React, {FC} from "react";
import cn from 'classnames';
import { Icon, ICON_TYPE } from "../Icon";
import { SubText } from "../Text";
import styles from "./CryptoCurrency.module.css";

type Props = {
    type: ICON_TYPE;
    className?: string;
};

export const CryptoCurrency: FC<Props> = ({ type, className = '', children }) => {
    return (
        <div className={cn([styles.root, className])}>
            <Icon type={type} className={styles.iconWrapper} />
            <SubText className={styles.text}>{children}</SubText>
        </div>
    );
};
