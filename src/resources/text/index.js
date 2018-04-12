import i18next from 'i18next'

import en from './en'
import ru from './ru'

i18next.init({
  lng: 'en',
  resources: {
    en: { translation: en },
    ru: { translation: ru }
  }
})

export default function (language, prefix) {
  i18next.changeLanguage(language)

  if (prefix == null || prefix === '') { return (key) => (i18next.t(key)) }
  return (key) => (i18next.t(`${prefix}.${key}`))
}
