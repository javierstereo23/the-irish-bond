import FadeIn from '../ui/FadeIn'
import SectionLabel from '../ui/SectionLabel'
import { useLanguage } from '../../hooks/useLanguage'

export default function BookEntry({ onOpenSynopsis }) {
  const { t } = useLanguage()

  return (
    <section id="book-entry" className="relative py-24 md:py-32 bg-bg-main">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <FadeIn>
          <SectionLabel>{t('bookEntry.label')}</SectionLabel>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            className="font-bold text-white font-serif"
            style={{
              fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
              letterSpacing: '0.04em',
              textShadow: '0 0 40px rgba(196,30,58,0.25)',
            }}
          >
            {t('bookEntry.title')}
          </h2>
          <p className="mt-3 text-sm md:text-base tracking-widest uppercase text-gray-500" style={{ letterSpacing: '0.35em' }}>
            {t('bookEntry.subtitle')}
          </p>
        </FadeIn>

        <FadeIn delay={0.25}>
          <p className="mt-8 text-lg md:text-xl text-gray-300 font-serif italic">
            {t('bookEntry.tagline')}
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <button
            type="button"
            onClick={onOpenSynopsis}
            className="mt-10 px-8 py-3.5 text-white text-sm tracking-widest uppercase rounded-sm border transition-all"
            style={{
              background: 'rgba(196,30,58,0.85)',
              borderColor: 'rgba(196,30,58,0.6)',
              letterSpacing: '0.2em',
              boxShadow: '0 0 20px rgba(196,30,58,0.2)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 0 40px rgba(196,30,58,0.5)')}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 0 20px rgba(196,30,58,0.2)')}
          >
            {t('bookEntry.cta')}
          </button>
        </FadeIn>
      </div>
    </section>
  )
}
