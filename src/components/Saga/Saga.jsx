import { mainBooks, spinoffs } from '../../data/books'
import BookCard from './BookCard'
import FadeIn from '../ui/FadeIn'
import { SectionLabel } from '../Synopsis'
import { useLanguage } from '../../hooks/useLanguage'

export default function Saga() {
  const { t, lang } = useLanguage()

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
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-16">
            {t('saga.subtitle')}
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
          {mainBooks.map((book, i) => (
            <FadeIn key={book.id} delay={i * 0.08}>
              <BookCard book={book} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <h3 className="text-xl text-gray-300 font-bold mb-8 text-center font-serif">
            {t('saga.spinoffsTitle')}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {spinoffs.map((s) => (
              <div key={s.id} className="group relative overflow-hidden rounded-lg" style={{ aspectRatio: '2/3' }}>
                <img
                  src={s.cover}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.parentElement.style.background = '#1a1a1a'
                    e.target.style.display = 'none'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-3">
                  <h4 className="text-xs font-bold text-white font-serif">{s.title}</h4>
                  <p className="text-xs text-gray-500 mt-1 italic">{s.desc[lang]}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
