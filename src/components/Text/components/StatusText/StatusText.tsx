import React, {FC} from "react";
import cn from 'classnames';
import {NormalText} from "../NormalText";
import {STATUS_TYPE} from "./StatusText.enums";
import styles from "./StatusText.module.css";

type Props = {
    className?: string;
    type: STATUS_TYPE;
};

const getStatusTypeClassName = (type: STATUS_TYPE) => {
    switch (type) {
        case STATUS_TYPE.NEW:
            return styles.open;
        case STATUS_TYPE.FILLED:
            return styles.filled;
        case STATUS_TYPE.CANCELLED:
            return styles.cancelled;
        default:
            return '';
    }
};

export const StatusText: FC<Props> = ({ className = '', type, children }) => {
    const rootClassName = cn([getStatusTypeClassName(type), className]);

    return (
        <NormalText className={rootClassName}>{children}</NormalText>
    );
};
