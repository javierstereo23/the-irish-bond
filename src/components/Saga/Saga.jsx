import { mainBooks } from '../../data/books'
import BookCard from './BookCard'
import FadeIn from '../ui/FadeIn'
import SectionLabel from '../ui/SectionLabel'
import { useLanguage } from '../../hooks/useLanguage'

export default function Saga() {
  const { t } = useLanguage()

  return (
    <section id="saga" className="relative py-24 md:py-32 bg-gradient-to-b from-bg-main via-[#0a0808] to-bg-main">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <SectionLabel>{t('saga.label')}</SectionLabel>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-5xl text-white font-bold text-center mb-4 font-serif">
            {t('saga.title')}
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-6 text-base md:text-lg">
            {t('saga.subtitle')}
          </p>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-16 italic font-serif text-sm md:text-base">
            {t('saga.context')}
          </p>
        </FadeIn>

        {/* Grid: scroll horizontal en mobile, grid en desktop */}
        <div className="-mx-6 md:mx-0 px-6 md:px-0 overflow-x-auto md:overflow-visible">
          <div className="flex md:grid md:grid-cols-3 lg:grid-cols-5 gap-6 snap-x snap-mandatory min-w-min pb-4 md:pb-0">
            {mainBooks.map((book, i) => (
              <FadeIn
                key={book.id}
                delay={i * 0.08}
                className="snap-center shrink-0 w-[78vw] sm:w-[55vw] md:w-auto"
              >
                <BookCard book={book} />
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Cierre */}
        <FadeIn delay={0.3}>
          <div className="mt-20 text-center">
            <p
              className="text-2xl md:text-4xl text-white font-serif italic mb-8"
              style={{ textShadow: '0 0 30px rgba(196,30,58,0.15)' }}
            >
              {t('saga.closing')}
            </p>
            <a
              href="#characters"
              className="inline-block px-8 py-3.5 text-white text-sm tracking-widest uppercase rounded-sm border transition-all"
              style={{
                background: 'rgba(45,122,58,0.15)',
                borderColor: 'rgba(45,122,58,0.5)',
                letterSpacing: '0.2em',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(45,122,58,0.3)'
                e.currentTarget.style.boxShadow = '0 0 30px rgba(45,122,58,0.35)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(45,122,58,0.15)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {t('saga.exploreCharacters')}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
