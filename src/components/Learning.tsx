import { useTranslation } from 'react-i18next'

const MicrosoftLearnIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M10.458 18.374L7.28 21.553 3.9 18.175l3.584-3.584c-1.188-1.174-2.374-2.354-3.559-3.53L.22 14.753c-.293.292-.293.768 0 1.06l7.689 7.689c.292.293.768.293 1.06 0l3.575-3.576c-1.102-.96-2.193-1.946-3.286-2.942zM22.726 1.26c-.115-.144-.292-.248-.483-.26h-.017c-.128 0-.255.046-.354.135L9.415 13.592c-.287.286-.287.752 0 1.039l3.95 3.95c.287.288.753.288 1.04 0l12.46-12.46c.18-.18.202-.464.055-.671-.44-.62-.94-1.191-1.524-1.667-.32-.263-.648-.49-.97-.678-.257-.148-.536-.22-.7-.145" />
  </svg>
)

interface Achievement {
  title: string
  // desc: string
  date: string
  image: string
  link: string
  badge?: string
}

export default function Learning() {
  const { t } = useTranslation()
  const items = t('learning.items', { returnObjects: true }) as Achievement[]

  return (
    <section id="learning" className="py-20 px-6 border-t border-bi-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-bi-50 mb-4">
            {t('learning.title')}
          </h2>
          <p className="text-bi-400 text-lg max-w-2xl mx-auto">
            {t('learning.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <AchievementCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

function AchievementCard({ item }: { item: Achievement }) {
  const { t } = useTranslation()

  return (
    <div className="relative bg-bi-800/30 border border-bi-700/30 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 flex flex-col sm:flex-row">
      <div className="flex items-start gap-5 p-6 lg:p-7 w-full">
        <div className="shrink-0">
          {item.image ? (
            <div className="w-12 h-12 rounded-xl bg-transparent flex items-center justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ) : (
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
              <MicrosoftLearnIcon className="w-6 h-6 text-accent-light" />
            </div>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3
              title={item.title}
              className="text-bi-50 text-base font-semibold leading-tight"
            >
              {item.title}
            </h3>
            {item.date && (
              <span className="text-xs text-bi-500 whitespace-nowrap shrink-0 bg-bi-800/50 px-2.5 py-1 rounded-md border border-bi-700/30">
                {item.date}
              </span>
            )}
          </div>
          {/* <p className="text-bi-400 text-sm leading-relaxed mb-4">{item.desc}</p> */}
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-accent text-sm font-medium hover:text-accent-light transition-colors group"
            >
              {t('learning.viewCredential')}
              <svg
                className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
