import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import ThemeToggle from '../components/ThemeToggle'
import LanguageSwitcher from '../components/LanguageSwitcher'

export default function ProjectDetailPage() {
  const { t } = useTranslation()
  const { slug } = useParams<{ slug: string }>()
  const items = t('projects.items', { returnObjects: true }) as {
    slug: string
    title: string
    desc: string
    detail: { overview: string; features: string[]; tech: string[] }
  }[]

  const index = items.findIndex((item) => item.slug === slug)
  const project = items[index]
  const data = projects[index]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  const next = items[(index + 1) % items.length]
  const prev = items[(index - 1 + items.length) % items.length]

  if (!project) {
    return (
      <div className="min-h-screen bg-bi-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-bi-50 mb-4">Project not found</h1>
          <Link to="/" className="text-accent hover:text-accent-light transition-colors">
            Back to home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-bi-900 text-bi-300 font-sans">
      <div className="sticky top-0 bg-bi-900/80 backdrop-blur-md border-b border-bi-700/50 z-50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            to="/#projects"
            className="flex items-center gap-2 text-bi-400 hover:text-bi-50 transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t('projectDetail.back')}
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-10">
          <div className="aspect-video rounded-2xl overflow-hidden bg-bi-800 border border-bi-700/30 mb-8">
            {data?.image ? (
              <img src={data.image} alt={project.title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-linear-to-br from-bi-800 to-bi-700 flex items-center justify-center">
                <svg className="w-16 h-16 text-bi-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.41a2.25 2.25 0 013.182 0l2.909 2.91m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </div>
            )}
          </div>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex flex-wrap gap-2">
              {(data?.tags ?? []).map((tag, i) => (
                <span key={i} className="text-xs bg-accent/10 text-accent-light px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <span className="text-bi-500 text-sm ml-auto">{index + 1} / {items.length}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-bi-50 mb-4 leading-tight">
            {project.title}
          </h1>
          <p className="text-lg text-bi-400 leading-relaxed">
            {project.detail.overview}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-10">
            <div>
              <h2 className="text-xl font-semibold text-bi-50 mb-5 flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {t('projectDetail.features')}
              </h2>
              <ul className="space-y-3">
                {project.detail.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-bi-300">
                    <svg className="w-5 h-5 text-emerald shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {data?.documents && data.documents.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-bi-50 mb-5 flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                  {t('projectDetail.documents')}
                </h2>
                <div className="space-y-3">
                  {data.documents.map((doc, i) => (
                    <a
                      key={i}
                      href={doc.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-bi-800/50 border border-bi-700/30 rounded-xl px-5 py-4 hover:border-accent/40 hover:bg-accent/5 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-accent-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-bi-200 text-sm font-medium truncate group-hover:text-bi-50 transition-colors">
                          {doc.label}
                        </p>
                        <p className="text-bi-500 text-xs mt-0.5">PDF</p>
                      </div>
                      <span className="text-accent text-sm font-medium shrink-0 group-hover:underline">
                        {t('projectDetail.viewPdf')}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {data?.files && data.files.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-bi-50 mb-5 flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  {t('projectDetail.downloadFiles')}
                </h2>
                <div className="space-y-3">
                  {data.files.map((file, i) => (
                    <a
                      key={i}
                      href={file.src}
                      download={file.label}
                      className="flex items-center gap-3 bg-bi-800/50 border border-bi-700/30 rounded-xl px-5 py-4 hover:border-accent/40 hover:bg-accent/5 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-amber/10 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-bi-200 text-sm font-medium truncate group-hover:text-bi-50 transition-colors">
                          {file.label}
                        </p>
                        <p className="text-bi-500 text-xs mt-0.5">PBIX</p>
                      </div>
                      <span className="text-accent text-sm font-medium shrink-0 group-hover:underline">
                        {t('projectDetail.download')}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {data?.images && data.images.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-bi-50 mb-5 flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.41a2.25 2.25 0 013.182 0l2.909 2.91m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                  {t('projectDetail.images')}
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {data.images.map((img, i) => (
                    <div key={i} className="rounded-xl overflow-hidden bg-bi-800 border border-bi-700/30">
                      <img src={img} alt="" className="w-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div>
            <h2 className="text-xl font-semibold text-bi-50 mb-5 flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
              </svg>
              {t('projectDetail.tech')}
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.detail.tech.map((tech, i) => (
                <span key={i} className="text-sm bg-bi-800 border border-bi-700 text-bi-300 px-3.5 py-1.5 rounded-lg">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-bi-800 flex items-center justify-between">
          <Link
            to={`/project/${prev.slug}`}
            className="flex items-center gap-2 text-bi-400 hover:text-bi-50 transition-colors text-sm group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            {prev.title}
          </Link>
          <Link
            to={`/project/${next.slug}`}
            className="flex items-center gap-2 text-bi-400 hover:text-bi-50 transition-colors text-sm group text-right"
          >
            {next.title}
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </article>

      <footer className="border-t border-bi-800 py-8 px-6">
        <div className="max-w-4xl mx-auto text-center text-bi-500 text-sm">
          &copy; {new Date().getFullYear()} {t('nav.brand')}. {t('footer.credit')}.
        </div>
      </footer>
    </div>
  )
}
