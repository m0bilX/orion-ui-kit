import { useLingui } from '@lingui/react'
import { defineMessage } from '@lingui/macro'
import { I18n } from '@lingui/core'

const translate = (
  i18n: I18n,
  id: string,
  message: string,
  values?: Object | undefined
) => {
  return i18n._(
    defineMessage({
      id,
      message
    }),
    values
  )
}

export const useTrans = () => {
  const { i18n } = useLingui()

  return {
    translate: (
      id: string,
      message: string,
      values?: Object | undefined
    ) => translate(i18n, id, message, values)
  }
}
