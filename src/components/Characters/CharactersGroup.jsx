import FadeIn from '../ui/FadeIn'
import CharacterCard from './CharacterCard'
import PlaceholderCard from './PlaceholderCard'
import { useLanguage } from '../../hooks/useLanguage'

function GroupHeader({ label, blurb }) {
  return (
    <div className="text-center mb-10">
      <FadeIn>
        <div className="flex items-center gap-4 justify-center mb-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-gray-700" />
          <h3
            className="text-base md:text-lg font-bold text-white font-serif uppercase"
            style={{ letterSpacing: '0.3em' }}
          >
            {label}
          </h3>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-gray-700" />
        </div>
      </FadeIn>
      {blurb && (
        <FadeIn delay={0.1}>
          <p className="text-sm md:text-base text-gray-500 italic max-w-2xl mx-auto font-serif">
            {blurb}
          </p>
        </FadeIn>
      )}
    </div>
  )
}

export default function CharactersGroup({ group }) {
  const { t } = useLanguage()
  const label = t(`characters.groups.${group.id}.label`)
  const blurb = t(`characters.groups.${group.id}.blurb`)

  // Pares: Connor+Brennan / Nail+Lean / Molly cierra centrada en una mitad
  if (group.layoutKind === 'pairs') {
    const pairs = group.members.slice(0, 4)
    const last = group.members[4]
    return (
      <div>
        <GroupHeader label={label} blurb={blurb} />
        <div className="grid sm:grid-cols-2 gap-6">
          {pairs.map((c, i) => (
            <CharacterCard key={c.id} char={c} index={i} />
          ))}
          {last && (
            <div className="sm:col-span-2 sm:max-w-[calc(50%-12px)] sm:mx-auto w-full">
              <CharacterCard char={last} index={4} />
            </div>
          )}
        </div>
      </div>
    )
  }

  if (group.layoutKind === 'placeholders') {
    return (
      <div>
        <GroupHeader label={label} blurb={blurb} />
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {group.members.map((c, i) => (
            <PlaceholderCard key={c.id} char={c} index={i} />
          ))}
        </div>
      </div>
    )
  }

  // Default: grid 1 / 2 / 3
  return (
    <div>
      <GroupHeader label={label} blurb={blurb} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {group.members.map((c, i) => (
          <CharacterCard key={c.id} char={c} index={i} />
        ))}
      </div>
    </div>
  )
}
