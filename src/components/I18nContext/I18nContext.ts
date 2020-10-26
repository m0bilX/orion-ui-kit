import React, { createContext } from 'react'
import { LANGUAGE } from '../Language'

type I18nContextType = {
  language: LANGUAGE
  changeLanguage: (language: LANGUAGE) => void
  getLocale: (language: LANGUAGE) => string
}

export const I18nContext: React.Context<I18nContextType> = createContext<
  I18nContextType
>({
  language: LANGUAGE.EN,
  changeLanguage: () => {},
  getLocale: () => 'en'
})
