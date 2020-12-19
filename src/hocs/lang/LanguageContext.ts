import React, { createContext } from 'react'
import { LANGUAGE } from './Language.enums'

type LanguageContextType = {
  language: LANGUAGE
  changeLanguage: (language: LANGUAGE) => void
  getLocale: (language: LANGUAGE) => string
}

export const LanguageContext: React.Context<LanguageContextType> = createContext<
  LanguageContextType
>({
  language: LANGUAGE.EN,
  changeLanguage: () => {},
  getLocale: () => 'en'
})
