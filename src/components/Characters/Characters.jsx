import { characters } from '../../data/characters'
import CharacterCard from './CharacterCard'
import FadeIn from '../ui/FadeIn'
import { SectionLabel } from '../Synopsis'
import { useLanguage } from '../../hooks/useLanguage'

export default function Characters() {
  const { t } = useLanguage()

  return (
    <section id="characters" className="relative py-24 md:py-32 bg-bg-main">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <SectionLabel>{t('characters.label')}</SectionLabel>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-5xl text-white font-bold text-center mb-4 font-serif">
            {t('characters.title')}
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-16">
            {t('characters.subtitle')}
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {characters.map((char, i) => (
            <CharacterCard key={char.id} char={char} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
