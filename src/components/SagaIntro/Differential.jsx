import FadeIn from '../ui/FadeIn'
import SectionLabel from '../ui/SectionLabel'
import CloverIcon from '../ui/CloverIcon'
import { useLanguage } from '../../hooks/useLanguage'

export default function Differential() {
  const { t } = useLanguage()
  const items = t('differential.items')
  const list = Array.isArray(items) ? items : []

  return (
    <section id="differential" className="relative py-20 md:py-28 bg-bg-main">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <SectionLabel>{t('differential.label')}</SectionLabel>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-2xl md:text-4xl text-white font-bold font-serif text-center mb-12">
            {t('differential.title')}
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-5 max-w-3xl mx-auto">
          {list.map((item, i) => (
            <FadeIn key={item} delay={0.15 + i * 0.07}>
              <div
                className="flex items-start gap-4 p-4 rounded-md border border-gray-800/60 bg-[#0d0d0d]"
              >
                <CloverIcon
                  color="#2d7a3a"
                  className="w-5 h-5 shrink-0 mt-0.5 opacity-90"
                />
                <p className="text-gray-200 text-base md:text-lg leading-snug">{item}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
