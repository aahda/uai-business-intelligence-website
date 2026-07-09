import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function Projects() {
  const { t } = useTranslation()
  const items = t('projects.items', { returnObjects: true }) as {
    slug: string
    title: string
    desc: string
  }[]

  return (
    <section id="projects" className="py-20 px-6 border-t border-bi-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-bi-50 mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-bi-400 text-lg max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <Link
              key={i}
              to={`/project/${item.slug}`}
              className="group bg-bi-800/30 border border-bi-700/30 rounded-xl overflow-hidden hover:border-accent/40 transition-all hover:-translate-y-1 block"
            >
              <div className="aspect-video bg-bi-800 flex items-center justify-center overflow-hidden">
                {projects[i].image ? (
                  <img
                    src={projects[i].image!}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-linear-to-br from-bi-800 to-bi-700 flex items-center justify-center">
                    <svg className="w-12 h-12 text-bi-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.41a2.25 2.25 0 013.182 0l2.909 2.91m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-bi-50 text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-bi-400 text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {projects[i].tags.map((tag, j) => (
                    <span key={j} className="text-xs bg-bi-700/50 text-bi-300 px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
