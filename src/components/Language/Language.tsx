import React, { FC, useContext } from 'react';
import { LANGUAGE } from "./Language.enums";
import { I18nContext } from "../I18nContext";
import { Theme, THEME } from "../Theme";
import styles from './Language.module.css';
import cn from 'classnames';

type Props = {
    className?: string;
};

export const Language: FC<Props> = ({ className }) => {
    const { language, changeLanguage } = useContext(I18nContext);
    const { theme } = useContext(Theme);
    const onClick = () => changeLanguage(language === LANGUAGE.RU ? LANGUAGE.EN : LANGUAGE.RU);

    return <div onClick={onClick} className={cn([styles.root, theme === THEME.DARK ? styles.dark : '', className])}>
        {language === LANGUAGE.RU ? LANGUAGE.RU : LANGUAGE.EN}
    </div>
};
