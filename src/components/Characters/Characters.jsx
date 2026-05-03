import { characterGroups } from '../../data/characters'
import CharactersGroup from './CharactersGroup'
import FadeIn from '../ui/FadeIn'
import SectionLabel from '../ui/SectionLabel'
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
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-20 text-base md:text-xl">
            {t('characters.subtitle')}
          </p>
        </FadeIn>

        <div className="space-y-24">
          {characterGroups.map((group) => (
            <CharactersGroup key={group.id} group={group} />
          ))}
        </div>
      </div>
    </section>
  )
}
