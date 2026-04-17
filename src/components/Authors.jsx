import FadeIn from './ui/FadeIn'
import { SectionLabel } from './Synopsis'
import { useLanguage } from '../hooks/useLanguage'
import AuthorsCarousel from './AuthorsCarousel'

export default function Authors() {
  const { t } = useLanguage()

  return (
    <section id="authors" className="relative py-24 md:py-32 bg-bg-main">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <SectionLabel>{t('authors.label')}</SectionLabel>
        </FadeIn>

        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <FadeIn direction="right">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-lg blur-xl opacity-40 group-hover:opacity-70 transition-opacity"
                  style={{ background: 'linear-gradient(135deg, rgba(45,122,58,0.4), rgba(212,168,83,0.2))' }} />
                <div className="relative rounded-lg overflow-hidden border border-green-900/20">
                  <AuthorsCarousel />
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="md:col-span-3 space-y-6">
            <FadeIn delay={0.1}>
              <p className="text-xs tracking-widest text-gold uppercase" style={{ letterSpacing: '0.3em' }}>
                {t('authors.names')}
              </p>
              <h2 className="text-3xl md:text-4xl text-white font-bold leading-tight font-serif mt-2">
                {t('authors.title')}
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-gray-300 leading-relaxed text-lg">{t('authors.bio')}</p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-gray-300 leading-relaxed text-lg">{t('authors.bioExtended')}</p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-800/50">
                <div className="text-center">
                  <p className="text-3xl font-bold text-white font-serif">{t('authors.stat1')}</p>
                  <p className="text-sm text-gray-500 tracking-wider uppercase mt-1">{t('authors.stat1Label')}</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white font-serif">{t('authors.stat2')}</p>
                  <p className="text-sm text-gray-500 tracking-wider uppercase mt-1">{t('authors.stat2Label')}</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white font-serif">{t('authors.stat3')}</p>
                  <p className="text-sm text-gray-500 tracking-wider uppercase mt-1">{t('authors.stat3Label')}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
