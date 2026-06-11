import { useTranslation } from 'react-i18next'

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
]

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  return (
    <div className="flex items-center gap-1 bg-bi-800 rounded-lg p-0.5 border border-bi-700">
      {languages.map((lang) => {
        const active = i18n.language === lang.code
        return (
          <button
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all cursor-pointer ${
              active ? 'bg-accent text-white' : 'text-bi-400 hover:text-bi-50'
            }`}
          >
            {lang.label}
          </button>
        )
      })}
    </div>
  )
}
