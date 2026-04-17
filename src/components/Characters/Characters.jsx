import { characters, secondaryCharacters } from '../../data/characters'
import CharacterCard from './CharacterCard'
import FadeIn from '../ui/FadeIn'
import { SectionLabel } from '../Synopsis'
import { useLanguage } from '../../hooks/useLanguage'

function SecondaryCard({ char }) {
  const { lang } = useLanguage()
  return (
    <div
      className="relative rounded-lg overflow-hidden flex gap-5 p-5"
      style={{ background: '#0d0d0d', borderLeft: `3px solid ${char.color}` }}
    >
      <div className="relative shrink-0 w-20 h-24 rounded-md overflow-hidden">
        <img
          src={char.image}
          alt={`${char.name} ${char.surname}`}
          className="w-full h-full object-cover object-top"
          onError={(e) => { e.target.style.display = 'none' }}
        />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${char.color}80, transparent)` }} />
      </div>
      <div className="flex flex-col justify-center gap-1.5">
        <h3 className="text-lg font-bold text-white font-serif">{char.name} <span className="text-gray-500">{char.surname}</span></h3>
        <p className="text-sm text-gray-400">{char.role[lang]}</p>
        <p className="text-sm italic text-gray-500">{char.book[lang]}</p>
        <p className="text-base text-gray-300 leading-relaxed mt-1">{char.description[lang]}</p>
        <div className="flex flex-wrap gap-1.5 mt-1">
          {char.traits[lang].map((t) => (
            <span key={t} className="text-sm px-2.5 py-1 rounded-full border"
              style={{ color: `${char.color}ee`, borderColor: `${char.color}50`, background: `${char.color}12` }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

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
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16 text-xl">
            {t('characters.subtitle')}
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {characters.map((char, i) => (
            <CharacterCard key={char.id} char={char} index={i} />
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-800/50" />
            <span className="text-xs tracking-widest text-gray-600 uppercase" style={{ letterSpacing: '0.25em' }}>
              {t('characters.secondaryLabel') || 'Personajes secundarios'}
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-800/50" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {secondaryCharacters.map((char) => (
              <SecondaryCard key={char.id} char={char} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
