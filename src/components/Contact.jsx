import { Mail, BookOpen, Flame, Heart } from 'lucide-react'
import FadeIn from './ui/FadeIn'
import { SectionLabel } from './Synopsis'
import { useLanguage } from '../hooks/useLanguage'

const CONTACT_EMAIL = 'contacto@theirishbond.com'

export default function Contact() {
  const { t } = useLanguage()

  const cards = [
    { icon: <BookOpen size={28} />, titleKey: 'contact.card1Title', descKey: 'contact.card1Desc' },
    { icon: <Flame size={28} />, titleKey: 'contact.card2Title', descKey: 'contact.card2Desc' },
    { icon: <Heart size={28} />, titleKey: 'contact.card3Title', descKey: 'contact.card3Desc' },
  ]

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-gradient-to-b from-[#0a0808] to-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <SectionLabel>{t('contact.label')}</SectionLabel>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-5xl text-white font-bold mb-6 font-serif">
            {t('contact.title').split('The Irish Bond')[0]}
            <span className="text-red-500">The Irish Bond</span>
            {t('contact.title').split('The Irish Bond')[1]}
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {cards.map(({ icon, titleKey, descKey }) => (
              <div key={titleKey} className="bg-bg-card border border-gray-800/40 rounded-lg p-6 hover:border-gray-700 transition-colors">
                <div className="mx-auto text-red-500/60 mb-3 flex justify-center">{icon}</div>
                <h4 className="text-sm font-bold text-white mb-2">{t(titleKey)}</h4>
                <p className="text-xs text-gray-500">{t(descKey)}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-3 px-10 py-4 text-white text-sm tracking-widest uppercase transition-all rounded-sm border hover:shadow-lg hover:shadow-red-900/40"
            style={{ background: 'rgba(183,28,28,0.9)', borderColor: 'rgba(196,30,58,0.5)', letterSpacing: '0.2em' }}
          >
            <Mail size={18} />
            {t('contact.cta')}
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
