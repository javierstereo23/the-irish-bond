import { CheckCircle } from 'lucide-react'
import FadeIn from './ui/FadeIn'
import { SectionLabel } from './Synopsis'
import { useLanguage } from '../hooks/useLanguage'
import { mainBooks } from '../data/books'

export default function Editorial() {
  const { t, lang } = useLanguage()
  const reasons = t('editorial.reasons')
  const positioningItems = t('editorial.positioningItems')

  return (
    <section id="editorial" className="relative py-24 md:py-32" style={{ background: '#0a0808' }}>
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <SectionLabel>{t('editorial.label')}</SectionLabel>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-5xl text-white font-bold text-center mb-4 font-serif">
            {t('editorial.title')}
          </h2>
          <p className="text-gray-400 text-lg text-center max-w-2xl mx-auto mb-16">
            {t('editorial.subtitle')}
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <FadeIn delay={0.2}>
            <div className="bg-bg-card border border-gray-800/40 rounded-lg p-8">
              <h3 className="text-white font-bold mb-6 tracking-widest uppercase text-sm" style={{ letterSpacing: '0.2em' }}>
                {t('editorial.positioningTitle')}
              </h3>
              <ul className="space-y-3">
                {Array.isArray(positioningItems) && positioningItems.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300 text-base">
                    <CheckCircle size={14} className="text-green-600/60 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="bg-bg-card border border-gray-800/40 rounded-lg p-8">
              <h3 className="text-white font-bold mb-4 tracking-widest uppercase text-sm" style={{ letterSpacing: '0.2em' }}>
                {t('editorial.targetTitle')}
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">{t('editorial.targetDesc')}</p>

              <div className="mt-8 grid grid-cols-3 gap-4 pt-6 border-t border-gray-800/50">
                <div className="text-center">
                  <p className="text-3xl font-bold text-white font-serif">9</p>
                  <p className="text-sm text-gray-500 mt-1">{lang === 'es' ? 'Libros totales' : 'Total books'}</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white font-serif">18–40</p>
                  <p className="text-sm text-gray-500 mt-1">Target</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white font-serif">F1</p>
                  <p className="text-sm text-gray-500 mt-1">{lang === 'es' ? 'Ambientación' : 'Setting'}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.35}>
          <h3 className="text-xl text-gray-300 font-bold mb-8 font-serif">
            {t('editorial.booksTitle')}
          </h3>
          <div className="space-y-3 mb-16">
            {mainBooks.map((book) => (
              <div
                key={book.id}
                className="flex flex-col sm:flex-row sm:items-center gap-4 bg-bg-card border border-gray-800/40 rounded-lg p-5 hover:border-gray-700 transition-colors"
                style={{ borderLeftWidth: '3px', borderLeftColor: book.color }}
              >
                <div className="shrink-0 flex items-center gap-3">
                  <span className="text-2xl font-bold text-gray-700 font-serif w-8">{book.num}</span>
                  <div>
                    <h4 className="text-white font-bold font-serif text-base">{book.title}</h4>
                    <p className="text-sm text-gray-500 mt-0.5">{book.genre[lang]}</p>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-300 text-base">{book.tagline[lang]}</p>
                </div>
                <div className="shrink-0">
                  <p className="text-sm italic" style={{ color: book.color }}>{book.hook[lang]}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <h3 className="text-xl text-gray-300 font-bold mb-8 text-center font-serif">
            {t('editorial.reasonsTitle')}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {Array.isArray(reasons) && reasons.map((r, i) => (
              <div key={i} className="bg-bg-card border border-gray-800/40 rounded-lg p-6 hover:border-gray-700 transition-colors">
                <div className="w-8 h-8 rounded-full bg-green-950/40 border border-green-900/30 flex items-center justify-center text-green-500 text-sm font-bold mb-4">
                  {i + 1}
                </div>
                <h4 className="text-white font-bold text-base mb-2">{r.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-10 py-4 text-white text-sm tracking-widest uppercase transition-all rounded-sm border hover:shadow-lg hover:shadow-red-900/30"
              style={{ background: '#2d7a3a', borderColor: 'rgba(196,30,58,0.5)', letterSpacing: '0.2em' }}
            >
              {t('editorial.cta')}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
