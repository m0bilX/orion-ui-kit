import React, {ChangeEvent, FC} from "react";
import cn from 'classnames';
import {Arrow} from "../../../Arrow";
import styles from './Select.module.css';

type Props = {
    className?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
    name?: string;
};

export const Select: FC<Props> = (props) => {
    const { className, onChange, value, name = '', children } = props;

    return (
        <div className={cn([styles.root])}>
            <select name={name} value={value} onChange={onChange} className={cn([styles.select, className])}>
                {children}
            </select>
            <Arrow className={styles.arrow} />
        </div>
    )
};
