import React, {FC, useEffect, useState} from "react";
import { I18nProvider } from '@lingui/react';
import { setupI18n } from '@lingui/core';
import { LanguageContext } from "./LanguageContext";
import { LANGUAGE } from "./Language.enums";

export const i18n = setupI18n();

const getLocale = (language: LANGUAGE) => {
    if (language === LANGUAGE.RU) {
        return 'ru';
    }

    return 'en'
}

export const WithLanguage: FC = ({ children }) => {
    const currentLanguage = localStorage.getItem('language') as LANGUAGE || LANGUAGE.EN;
    const [language, setLanguage] = useState(currentLanguage);

    const changeLanguage = async (nextLanguage: LANGUAGE) => {
        try {
            const languageStr = getLocale(nextLanguage);
            const { messages } = await import(`./locales/${languageStr}`);

            i18n.load(languageStr, messages);
            i18n.activate(languageStr);
            localStorage.setItem('language', nextLanguage as string);

            setLanguage(nextLanguage);
        } catch (err) {
            console.log('load translate error', err)
        }
    }

    useEffect(() => {
        changeLanguage(language);
    }, []);

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, getLocale }}>
            <I18nProvider i18n={i18n}>
                {children}
            </I18nProvider>
        </LanguageContext.Provider>
    );
}
