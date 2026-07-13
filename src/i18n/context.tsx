import { createContext, useContext, useState, type ReactNode } from "react"
import en from "./en"
import zh from "./zh"
import type { Translations } from "./en"

type Lang = "en" | "zh"

interface LanguageContextType {
  lang: Lang
  t: Translations
  toggleLang: () => void
}

const translations: Record<Lang, Translations> = { en, zh }

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en")

  const toggleLang = () => setLang((prev) => (prev === "en" ? "zh" : "en"))

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}
