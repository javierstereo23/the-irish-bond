import FadeIn from '../ui/FadeIn'
import SectionLabel from '../ui/SectionLabel'
import { useLanguage } from '../../hooks/useLanguage'

export default function SagaConcept() {
  const { t } = useLanguage()

  return (
    <section id="concept" className="relative py-24 md:py-32 bg-gradient-to-b from-bg-main via-[#0a0a0a] to-bg-main">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <SectionLabel>{t('concept.label')}</SectionLabel>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            className="text-3xl md:text-5xl text-white font-bold font-serif leading-tight mb-10"
            style={{ letterSpacing: '0.05em' }}
          >
            {t('concept.title')}
          </h2>
        </FadeIn>

        <div className="space-y-4 max-w-2xl mx-auto">
          <FadeIn delay={0.2}>
            <p className="text-gray-300 text-lg md:text-xl font-serif italic">{t('concept.body1')}</p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-gray-300 text-lg md:text-xl font-serif italic">{t('concept.body2')}</p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-white text-lg md:text-xl font-serif italic">{t('concept.body3')}</p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
