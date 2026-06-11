import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section id="about" className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 text-sm text-accent-light mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            {t('hero.badge')}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-bi-50 leading-tight mb-4">
            {t('hero.greeting')}{' '}
            <span className="bg-linear-to-r from-accent to-violet bg-clip-text text-transparent">
              {t('hero.name')}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-bi-400 leading-relaxed mb-6">
            {t('hero.bio1')}
          </p>
          <p className="text-bi-500 leading-relaxed mb-8">{t('hero.bio2')}</p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:shadow-lg hover:shadow-accent/25"
            >
              {t('hero.ctaProjects')}
            </a>
            <a
              href="#contact"
              className="border border-bi-600 hover:border-bi-400 text-bi-200 hover:text-bi-50 px-6 py-3 rounded-xl text-sm font-semibold transition-all"
            >
              {t('hero.ctaContact')}
            </a>
          </div>
        </div>
        <div className="md:col-span-2 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-br from-accent/20 to-violet/20 rounded-full blur-3xl" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-bi-800 border-2 border-bi-700 flex items-center justify-center overflow-hidden">
              <svg
                className="w-32 h-32 text-bi-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
