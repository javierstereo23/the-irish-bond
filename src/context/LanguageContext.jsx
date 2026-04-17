import { createContext, useState, useCallback } from 'react'
import { translations } from '../i18n/translations'

export const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(
    () => localStorage.getItem('irish-bond-lang') || 'es'
  )

  const setLang = useCallback((l) => {
    setLangState(l)
    localStorage.setItem('irish-bond-lang', l)
  }, [])

  const t = useCallback(
    (key) => {
      const keys = key.split('.')
      let val = translations[lang]
      for (const k of keys) {
        val = val?.[k]
      }
      return val ?? key
    },
    [lang]
  )

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
