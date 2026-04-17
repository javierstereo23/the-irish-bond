import { useRef, useState } from 'react'
import { useLanguage } from '../../hooks/useLanguage'

export default function BookCard({ book }) {
  const { lang, t } = useLanguage()
  const cardRef = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 15
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * 15
    setTilt({ x, y })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setHovered(false)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative cursor-default select-none"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: hovered ? 'transform 0.05s ease' : 'transform 0.4s ease',
      }}
    >
      <div
        className="absolute top-3 left-3 z-20 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white font-serif"
        style={{ background: book.color }}
      >
        {book.num}
      </div>

      <div className="absolute top-3 right-3 z-20">
        {book.available ? (
          <span className="text-xs px-2 py-0.5 rounded-full text-green-400 bg-green-950/60 border border-green-900/40 tracking-wider">
            {t('saga.available')}
          </span>
        ) : (
          <span className="text-xs px-2 py-0.5 rounded-full text-gray-500 bg-gray-900/60 border border-gray-800 tracking-wider">
            {t('saga.comingSoon')}
          </span>
        )}
      </div>

      <div
        className="relative overflow-hidden rounded-lg"
        style={{ aspectRatio: '2/3', borderLeft: `3px solid ${book.color}` }}
      >
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.parentElement.style.background = '#1a1a1a'
            e.target.style.display = 'none'
          }}
        />

        <div
          className="absolute inset-0 flex flex-col justify-end p-4 transition-opacity duration-300"
          style={{
            background: `linear-gradient(to top, rgba(8,8,8,0.97) 0%, rgba(8,8,8,0.6) 50%, transparent 100%)`,
            opacity: hovered ? 1 : 0,
          }}
        >
          <h3 className="text-white font-bold text-lg font-serif mb-1">{book.title}</h3>
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">{book.genre[lang]}</p>
          <p className="text-gray-300 text-sm leading-relaxed">{book.tagline[lang]}</p>
          <p
            className="text-xs italic mt-3 pt-3 border-t"
            style={{ color: book.color, borderColor: `${book.color}30` }}
          >
            {book.hook[lang]}
          </p>
        </div>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: hovered
              ? 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 60%)'
              : 'none',
          }}
        />
      </div>

      <div className="mt-3 text-center">
        <span
          className="text-xs tracking-widest uppercase px-3 py-1 rounded-full"
          style={{ color: book.color, background: `${book.color}15`, border: `1px solid ${book.color}25` }}
        >
          {book.protagonist}
        </span>
      </div>
    </div>
  )
}
