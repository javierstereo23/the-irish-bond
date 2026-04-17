import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    image: '/images/autoras/slide-cafe.jpg',
    tag: 'One story, two minds · @paula.falcone',
    label: 'El ritual de crear',
    caption: 'Dos lattes, un documento en blanco y una saga que empieza a tomar forma. Así arrancó todo.',
  },
  {
    image: '/images/autoras/slide-research.jpg',
    tag: 'El mundo antes de las palabras',
    label: 'Los personajes primero',
    caption: 'Fotos de referencia, manuscritos marcados en azul, el capítulo 16 en un post-it. Antes de escribir una línea, construyeron un mundo entero.',
  },
  {
    image: '/images/autoras/slide-trabajo.jpg',
    tag: 'En paralelo',
    label: 'Dos voces, una saga',
    caption: 'Caro estructura. Annie escribe. Juntas, capítulo a capítulo, construyeron los nueve libros del universo Irish Bond.',
  },
  {
    image: '/images/autoras/slide-proceso.jpg',
    tag: 'La energía creativa',
    label: 'Así se hace',
    caption: 'El marcador verde, las fotos de personajes regadas por el escritorio, el asombro compartido cuando algo funciona. Así se construyen 600.000 palabras.',
  },
]

export default function AuthorsCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef(null)

  const next = () => setCurrent(c => (c + 1) % slides.length)
  const prev = () => setCurrent(c => (c - 1 + slides.length) % slides.length)

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(next, 4500)
    return () => clearInterval(timerRef.current)
  }, [paused, current])

  return (
    <div
      className="relative rounded-lg overflow-hidden w-full"
      style={{ aspectRatio: '3/4' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? 'auto' : 'none' }}
        >
          <img
            src={slide.image}
            alt={slide.label}
            className="w-full h-full object-cover"
            onError={(e) => { e.target.parentElement.style.background = '#1a1a1a' }}
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.4) 45%, rgba(0,0,0,0.1) 100%)' }}
          />
          {/* Text content */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-xs tracking-widest text-green-400/70 uppercase mb-2" style={{ letterSpacing: '0.2em' }}>
              {slide.tag}
            </p>
            <h4 className="text-white font-bold font-serif text-xl mb-2">{slide.label}</h4>
            <p className="text-gray-300 text-sm leading-relaxed">{slide.caption}</p>
          </div>
        </div>
      ))}

      {/* Prev / Next */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-white transition-colors"
        style={{ background: 'rgba(0,0,0,0.45)' }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.7)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.45)'}
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-white transition-colors"
        style={{ background: 'rgba(0,0,0,0.45)' }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.7)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.45)'}
      >
        <ChevronRight size={18} />
      </button>

      {/* Progress dots */}
      <div className="absolute bottom-4 right-5 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? '20px' : '6px',
              height: '6px',
              background: i === current ? '#2d7a3a' : 'rgba(255,255,255,0.35)',
            }}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute top-4 right-5 text-xs text-gray-400 font-mono">
        {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>
    </div>
  )
}
