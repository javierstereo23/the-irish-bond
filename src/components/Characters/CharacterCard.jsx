import { useState } from 'react'
import FadeIn from '../ui/FadeIn'
import { useLanguage } from '../../hooks/useLanguage'

export default function CharacterCard({ char, index }) {
  const { lang } = useLanguage()
  const [hovered, setHovered] = useState(false)

  return (
    <FadeIn delay={index * 0.08}>
      <div
        className="relative group cursor-default h-full"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className="absolute -inset-0.5 rounded-lg blur-md transition-opacity duration-500"
          style={{ background: `linear-gradient(135deg, ${char.color}44, transparent)`, opacity: hovered ? 1 : 0 }}
        />

        <div
          className="relative rounded-lg overflow-hidden h-full flex flex-col"
          style={{ borderLeft: `3px solid ${char.color}`, background: '#0d0d0d' }}
        >
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src={char.image}
              alt={`${char.name} ${char.surname}`}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              onError={(e) => { e.target.style.display = 'none' }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to top, ${char.color}99 0%, rgba(13,13,13,0.7) 40%, rgba(13,13,13,0.1) 100%)`,
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-2xl font-bold text-white font-serif">{char.name}</h3>
              <p className="text-xs tracking-wider text-gray-300 uppercase mt-0.5">{char.surname}</p>
            </div>
          </div>

          <div className="p-5 flex flex-col flex-1 gap-3">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>{char.age} {lang === 'es' ? 'años' : 'y.o.'}</span>
              <span className="w-1 h-1 rounded-full bg-gray-600" />
              <span>{char.role[lang]}</span>
            </div>

            <p className="text-gray-300 text-base leading-relaxed">{char.description[lang]}</p>

            {char.quote[lang] && (
              <blockquote
                className="text-sm italic text-gray-400 border-l-2 pl-3 font-serif"
                style={{ borderColor: `${char.color}60` }}
              >
                {char.quote[lang]}
              </blockquote>
            )}

            <div className="flex flex-wrap gap-1.5 mt-auto">
              {char.traits[lang].map((trait) => (
                <span
                  key={trait}
                  className="text-sm px-2.5 py-1 rounded-full border"
                  style={{ color: `${char.color}ee`, borderColor: `${char.color}50`, background: `${char.color}12` }}
                >
                  {trait}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-gray-800/50">
              <span className="w-2 h-2 rounded-full" style={{ background: char.color }} />
              <span className="text-sm text-gray-500">
                {lang === 'es' ? 'Ojos' : 'Eyes'} {char.eyes[lang]}
              </span>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}
