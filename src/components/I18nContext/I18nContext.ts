import { createContext } from "react";
import { LANGUAGE } from "../Language";

type I18nContextType = {
    language: LANGUAGE;
    changeLanguage: (language: LANGUAGE) => void;
    getLocale: (language: LANGUAGE) => string;
}

export const I18nContext = createContext<I18nContextType>({
    language: LANGUAGE.EN,
    changeLanguage: () => {},
    getLocale: () => 'en',
})
