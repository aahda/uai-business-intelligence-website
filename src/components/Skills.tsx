import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Csharp } from '../assets/skills/CsharpIcon'
import { Java } from '../assets/skills/JavaIcon'
import { PowerBi } from '../assets/skills/PowerBi'

const accentColors = [
  {
    border: 'border-l-accent/60',
    bg: 'bg-accent/5',
    dot: 'bg-accent',
    label: 'blue',
  },
  {
    border: 'border-l-violet/60',
    bg: 'bg-violet/5',
    dot: 'bg-violet',
    label: 'violet',
  },
  {
    border: 'border-l-emerald/60',
    bg: 'bg-emerald/5',
    dot: 'bg-emerald',
    label: 'green',
  },
  {
    border: 'border-l-amber/60',
    bg: 'bg-amber/5',
    dot: 'bg-amber',
    label: 'amber',
  },
]

function SkillIcon({ icon, name }: { icon: string; name: string }) {
  const [failed, setFailed] = useState(false)
  // const initial = name
  //   .replace(/[^a-zA-Z0-9]/g, '')
  //   .slice(0, 2)
  //   .toUpperCase()

  if (failed) {
    if (icon === 'csharp') {
      return <Csharp className="w-6 h-6" />
    }

    if (icon === 'java') {
      return <Java className="w-6 h-6" />
    }

    if (icon === 'powerbi') {
      return <PowerBi className="w-6 h-6" />
    }

    // return (
    //   <div className="w-6 h-6 rounded-md bg-accent/20 flex items-center justify-center shrink-0">
    //     <span className="text-[9px] font-bold text-accent leading-none">
    //       {initial}
    //     </span>
    //   </div>
    // )
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${icon}`}
      alt={name}
      className="w-5 h-5 shrink-0"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}

export default function Skills() {
  const { t } = useTranslation()
  const categories = t('skills.categories', { returnObjects: true }) as {
    name: string
    items: { name: string; icon: string }[]
  }[]

  return (
    <section id="skills" className="py-20 px-6 border-t border-bi-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-bi-50 mb-4">
            {t('skills.title')}
          </h2>
          <p className="text-bi-400 text-lg max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, i) => {
            const colors = accentColors[i % accentColors.length]
            return (
              <div
                key={i}
                className="relative bg-bi-800/30 border border-bi-700/30 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-accent/5 transition-shadow duration-300"
              >
                <div
                  className={`absolute left-0 top-0 bottom-0 w-[3px] ${colors.dot}`}
                />
                <div className="p-6 lg:p-7">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`w-9 h-9 rounded-xl ${colors.bg} flex items-center justify-center`}
                    >
                      <div
                        className={`w-2.5 h-2.5 rounded-full ${colors.dot}`}
                      />
                    </div>
                    <h3 className="text-bi-50 text-base font-semibold">
                      {cat.name}
                    </h3>
                    <span className="text-xs text-bi-500 ml-auto">
                      {cat.items.length}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {cat.items.map((skill, j) => (
                      <div
                        key={j}
                        className="flex items-center gap-2.5 bg-bi-900/40 border border-bi-700/25 rounded-xl px-3.5 py-2.5 hover:border-accent/30 hover:bg-accent/[0.04] transition-all duration-200 group"
                      >
                        <SkillIcon icon={skill.icon} name={skill.name} />
                        <span className="text-sm text-bi-300 font-medium truncate group-hover:text-bi-50 transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
