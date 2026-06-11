import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const { t } = useTranslation()

  return (
    <nav className="fixed top-0 w-full bg-bi-900/80 backdrop-blur-md border-b border-bi-700/50 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
              />
            </svg>
          </div>
          <span className="text-bi-50 font-bold text-lg">{t('nav.brand')}</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a
            href="#about"
            className="text-bi-400 hover:text-bi-50 transition-colors"
          >
            {t('nav.about')}
          </a>
          <a
            href="#research"
            className="text-bi-400 hover:text-bi-50 transition-colors"
          >
            {t('nav.research')}
          </a>
          <a
            href="#projects"
            className="text-bi-400 hover:text-bi-50 transition-colors"
          >
            {t('nav.projects')}
          </a>
          <a
            href="#contact"
            className="text-bi-400 hover:text-bi-50 transition-colors"
          >
            {t('nav.contact')}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <a
            href="#projects"
            className="bg-accent hover:bg-accent-dark text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            {t('nav.cta')}
          </a>
        </div>
      </div>
    </nav>
  )
}
