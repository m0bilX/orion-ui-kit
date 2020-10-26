import React, {ChangeEvent, FocusEvent, FC} from "react";
import cn from 'classnames';
import styles from './InputText.module.css';

type Props = {
    className?: string;
    value?: string;
    readOnly?: boolean;
    id?: string;
    name?: string;
    autoComplete?: string;
    placeholder?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
};

export const InputText: FC<Props> = (props) => {
    const { className, value, onChange, name, id, readOnly, autoComplete, placeholder } = props;

    return (
        <input id={id}
               type="text"
               readOnly={readOnly}
               name={name}
               className={cn([styles.root, className])}
               value={value}
               onChange={onChange}
               onFocus={props.onFocus}
               autoComplete={autoComplete}
               placeholder={placeholder}
        />
    )
};
