import React, {FC} from "react";
import styles from './Checkbox.module.css';
import cn from 'classnames';

type Props = {
    className?: string;
    onChange?: () => void;
    value: boolean;
};

export const Checkbox: FC<Props> = ({ children, onChange, className, value }) => {
    return (
        <label className={cn(styles.root, className)}>
            <input className={styles.cb}
                   checked={value}
                   type="checkbox" onChange={onChange} />
            <span className={styles.cbStub} />
            {children}
        </label>
    );
};
