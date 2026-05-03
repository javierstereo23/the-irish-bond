import { User } from 'lucide-react'
import FadeIn from '../ui/FadeIn'
import { useLanguage } from '../../hooks/useLanguage'

// TODO(parents): bios y taglines pendientes (Caro). Hoy mostramos una silueta + "Próximamente".
export default function PlaceholderCard({ char, index = 0 }) {
  const { t, lang } = useLanguage()
  const placeholderLabel = t('characters.placeholderLabel')

  return (
    <FadeIn delay={index * 0.08} className="h-full">
      <div
        className="relative rounded-lg overflow-hidden h-full flex flex-col"
        style={{ borderLeft: `3px solid ${char.color || '#6b6b6b'}`, background: '#0d0d0d' }}
      >
        <div
          className="relative aspect-[3/4] overflow-hidden flex items-center justify-center"
          style={{
            background: `linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%)`,
          }}
        >
          {char.image ? (
            <img
              src={char.image}
              alt={`${char.name} ${char.surname || ''}`}
              className="w-full h-full object-cover object-top opacity-60"
              style={{ filter: 'grayscale(0.4)' }}
              onError={(e) => { e.target.style.display = 'none' }}
            />
          ) : (
            <User size={84} className="text-gray-700" strokeWidth={1} />
          )}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, rgba(13,13,13,0.95) 0%, rgba(13,13,13,0.4) 50%, transparent 100%)`,
            }}
          />
          <div className="absolute top-3 right-3">
            <span
              className="text-xs px-2 py-0.5 rounded-full text-gray-400 bg-gray-900/80 border border-gray-800 tracking-wider uppercase"
              style={{ letterSpacing: '0.15em' }}
            >
              {placeholderLabel}
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-2xl font-bold text-white font-serif">{char.name}</h3>
            {char.surname && (
              <p className="text-xs tracking-wider text-gray-300 uppercase mt-0.5">{char.surname}</p>
            )}
          </div>
        </div>

        <div className="p-5 flex flex-col flex-1 gap-2">
          {char.role && (
            <p className="text-sm text-gray-400 italic">{char.role[lang]}</p>
          )}
          <p className="text-sm text-gray-600 italic leading-relaxed">
            {lang === 'es'
              ? 'Su historia se revelará pronto.'
              : 'Their story will be revealed soon.'}
          </p>
        </div>
      </div>
    </FadeIn>
  )
}
