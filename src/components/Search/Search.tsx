import React, {ChangeEvent, FC, useContext} from 'react';
import { useLingui } from "@lingui/react";
import { defineMessage }  from "@lingui/macro";
import cn from 'classnames';
import { Theme, THEME } from "../Theme";
import { InputText } from "../Inputs";
import styles from './Search.module.css';

type Props = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    className: string;
};

export const Search: FC<Props> = ({ onChange, className }) => {
    const { theme } = useContext(Theme);
    const { i18n } = useLingui();
    const placeholder = i18n._(defineMessage({ id: 'components.search.placeholder', message: 'Search...' }));

    return (
        <div className={cn([styles.root, theme === THEME.DARK ? styles.dark : '', className])}>
            <InputText className={styles.input} onChange={onChange} placeholder={placeholder} />
        </div>
    );
};
