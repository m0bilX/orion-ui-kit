import React, {ChangeEvent, FC} from 'react';
import { useLingui } from "@lingui/react";
import { defineMessage }  from "@lingui/macro";
import cn from 'classnames';
import { InputText } from "../Inputs";
import styles from './Search.module.css';

type Props = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    className: string;
};

export const Search: FC<Props> = ({ onChange, className }) => {
    const { i18n } = useLingui();
    const placeholder = i18n._(defineMessage({ id: 'search_placeholder', message: 'Search...' }));

    return (
        <div className={cn([styles.root, className])}>
            <InputText className={styles.input} onChange={onChange} placeholder={placeholder} />
        </div>
    );
};
