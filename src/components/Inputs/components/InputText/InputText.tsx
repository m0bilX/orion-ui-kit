import React, {ChangeEvent, FocusEvent, FC, useContext} from "react";
import cn from 'classnames';
import styles from './InputText.module.css';
import {THEME, Theme} from "../../../Theme";

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
    const {theme} = useContext(Theme);
    const dark = theme === THEME.DARK ? styles.dark : '';

    return (
        <input id={id}
               type="text"
               readOnly={readOnly}
               name={name}
               className={cn([styles.root, dark, className])}
               value={value}
               onChange={onChange}
               onFocus={props.onFocus}
               autoComplete={autoComplete}
               placeholder={placeholder}
        />
    )
};
