import {IconType} from '../../Icon'

export type SnackbarStateItem = {
  id: string
  lifeSpan?: number
  text: string
  link?: string
  linkText?: string
  iconType?: IconType
}
