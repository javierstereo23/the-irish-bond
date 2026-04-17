import { BookOpen } from 'lucide-react'
import FadeIn from './ui/FadeIn'
import { useLanguage } from '../hooks/useLanguage'

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-red-900/30" />
      <span className="text-xs tracking-widest text-red-500/60 uppercase" style={{ letterSpacing: '0.3em' }}>
        {children}
      </span>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-red-900/30" />
    </div>
  )
}

export { SectionLabel }

export default function Synopsis() {
  const { t } = useLanguage()
  const tags = t('synopsis.tags')

  return (
    <section id="synopsis" className="relative py-24 md:py-32 bg-gradient-to-b from-bg-main via-[#0a0a0a] to-bg-main">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <SectionLabel>{t('synopsis.label')}</SectionLabel>
        </FadeIn>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3 space-y-6">
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-5xl text-white font-bold leading-tight font-serif">
                {t('synopsis.title1')}<br />
                <span className="text-red-500">{t('synopsis.title2')}</span><br />
                {t('synopsis.title3')}
              </h2>
            </FadeIn>

            {['p1', 'p2', 'p3'].map((k, i) => (
              <FadeIn key={k} delay={0.2 + i * 0.1}>
                <p className="text-gray-400 leading-relaxed text-base md:text-lg">{t(`synopsis.${k}`)}</p>
              </FadeIn>
            ))}

            <FadeIn delay={0.5}>
              <div className="pt-4 flex flex-wrap gap-3">
                {Array.isArray(tags) && tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs tracking-wider text-red-400/80 border border-red-900/30 rounded-full bg-red-950/20 uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          <div className="md:col-span-2">
            <FadeIn delay={0.3} direction="left">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-b from-red-900/30 to-transparent rounded-lg blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gradient-to-b from-gray-900 to-black rounded-lg p-8 border border-red-900/20">
                  <BookOpen className="text-red-500/60 mb-4" size={32} />
                  <blockquote className="text-gray-300 italic leading-relaxed font-serif">
                    {t('synopsis.quote1')}
                  </blockquote>
                  <p className="text-red-400/60 text-sm mt-4 tracking-wider uppercase">
                    {t('synopsis.quote1attr')}
                  </p>
                  <div className="mt-6 pt-6 border-t border-gray-800">
                    <blockquote className="text-gray-300 italic leading-relaxed font-serif">
                      {t('synopsis.quote2')}
                    </blockquote>
                    <p className="text-red-400/60 text-sm mt-4 tracking-wider uppercase">
                      {t('synopsis.quote2attr')}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
