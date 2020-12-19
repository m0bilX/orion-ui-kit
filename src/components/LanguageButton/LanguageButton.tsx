import React, { FC, useContext } from 'react';
import { LANGUAGE } from "../../hocs";
import { LanguageContext } from "../../hocs";
import styles from './LanguageButton.module.css';
import cn from 'classnames';

type Props = {
    className?: string;
};

export const LanguageButton: FC<Props> = ({ className }) => {
    const { language, changeLanguage } = useContext(LanguageContext);
    const onClick = () => changeLanguage(language === LANGUAGE.RU ? LANGUAGE.EN : LANGUAGE.RU);

    return <div onClick={onClick} className={cn([styles.root, className])}>
        {language === LANGUAGE.RU ? LANGUAGE.RU : LANGUAGE.EN}
    </div>
};
