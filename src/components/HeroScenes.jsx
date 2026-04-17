import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import CloverIcon from './ui/CloverIcon'
import { useLanguage } from '../hooks/useLanguage'

const heroStyles = `
  @keyframes float-up {
    0% { transform: translateY(0px) rotate(0deg); opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 0.6; }
    100% { transform: translateY(-120px) rotate(15deg); opacity: 0; }
  }
  @keyframes panel-breathe {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.025); }
  }
  @keyframes tag-slide {
    0% { transform: translateY(10px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }
  @keyframes shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes reveal-panel {
    0% { clip-path: inset(0 100% 0 0); }
    100% { clip-path: inset(0 0% 0 0); }
  }
  @keyframes glow-pulse {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 0.8; }
  }
  .panel-hover:hover .panel-img { transform: scale(1.06); }
  .panel-hover:hover .panel-caption { transform: translateY(0); opacity: 1; }
  .panel-caption { transform: translateY(12px); opacity: 0; transition: all 0.4s ease; }
  .panel-img { transition: transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94); }
  .float-particle {
    animation: float-up linear infinite;
    position: absolute;
    pointer-events: none;
  }
  .title-shimmer {
    background: linear-gradient(90deg, #fff 0%, #c41e3a 30%, #d4a853 50%, #c41e3a 70%, #fff 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 4s linear infinite;
  }
`

const scenes = [
  {
    image: '/images/escenas/escena-beso-equivocado.jpg',
    book: 'Libro I',
    title: 'King of Speed',
    tag: 'Gala FIA · Mónaco',
    hook: 'Besó al gemelo equivocado.',
    sub: 'El caos que lo inició todo.',
    color: '#c41e3a',
    delay: '0s',
  },
  {
    image: '/images/escenas/escena-el-pacto.jpg',
    book: 'Libro I',
    title: 'El Pacto',
    tag: 'Paddock · F1',
    hook: 'Un arreglo perfecto.',
    sub: 'Hasta que dejó de serlo.',
    color: '#d4a853',
    delay: '0.15s',
  },
  {
    image: '/images/escenas/escena-connor-maison.jpg',
    book: 'Libro II',
    title: 'King of Control',
    tag: 'Rugby · Secretos',
    hook: 'El más perfecto de todos.',
    sub: 'Tenía el secreto más oscuro.',
    color: '#2d7a3a',
    delay: '0.3s',
  },
]

const particles = Array.from({ length: 14 }, (_, i) => ({
  left: `${8 + i * 6.5}%`,
  size: 4 + (i % 4) * 3,
  duration: `${5 + (i % 5) * 2.5}s`,
  delay: `${(i % 7) * 1.2}s`,
  bottom: `${10 + (i % 4) * 15}%`,
  color: i % 3 === 0 ? 'rgba(196,30,58,0.6)' : i % 3 === 1 ? 'rgba(212,168,83,0.5)' : 'rgba(45,122,58,0.5)',
}))

export default function HeroScenes() {
  const { t } = useLanguage()
  const [active, setActive] = useState(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden bg-black">
      <style>{heroStyles}</style>

      {/* Scroll progress */}
      <div className="fixed top-0 left-0 z-50 h-0.5 transition-all duration-150"
        style={{ width: `${scrollProgress}%`, background: 'linear-gradient(90deg, #c41e3a, #d4a853, #2d7a3a)' }} />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p, i) => (
          <div
            key={i}
            className="float-particle rounded-full"
            style={{
              left: p.left,
              bottom: p.bottom,
              width: p.size,
              height: p.size,
              background: p.color,
              animationDuration: p.duration,
              animationDelay: p.delay,
            }}
          />
        ))}
        {/* Ambient glows */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, rgba(196,30,58,0.08) 0%, transparent 70%)', animation: 'glow-pulse 6s ease-in-out infinite' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full" style={{ background: 'radial-gradient(circle, rgba(212,168,83,0.06) 0%, transparent 70%)', animation: 'glow-pulse 8s ease-in-out infinite 2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(45,122,58,0.04) 0%, transparent 60%)' }} />
      </div>

      {/* Top header */}
      <div className="relative z-20 flex items-center justify-between px-6 md:px-12 pt-28 pb-6 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <CloverIcon className="w-8 h-8" color="#2d7a3a" />
          <div>
            <p className="text-xs text-green-400/60 tracking-widest uppercase" style={{ letterSpacing: '0.3em' }}>
              {t('hero.presents')}
            </p>
            <p className="text-white font-serif font-bold tracking-wider text-sm">THE IRISH BOND</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <span className="text-xs text-gray-600 tracking-widest uppercase" style={{ letterSpacing: '0.2em' }}>La saga</span>
          <div className="h-px w-8 bg-gray-800" />
          <span className="text-xs text-gray-500">9 libros · Universo completo</span>
        </div>
      </div>

      {/* Main headline */}
      <div className="relative z-20 text-center px-6 mb-8">
        <h1 className="font-serif font-bold leading-none" style={{ fontSize: 'clamp(2.8rem, 8vw, 7rem)' }}>
          <span className="title-shimmer">Una familia.</span>
          <br />
          <span className="text-white">Un legado.</span>
          <br />
          <span className="title-shimmer">Un amor que lo destruye todo.</span>
        </h1>
        <p className="text-gray-500 mt-4 text-sm tracking-widest uppercase" style={{ letterSpacing: '0.3em' }}>
          Tres historias. Una saga. Zero escapatoria.
        </p>
      </div>

      {/* Three scene panels */}
      <div className="relative z-10 flex-1 flex items-end px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-3 gap-3 md:gap-5 w-full" style={{ height: 'min(60vh, 520px)' }}>
          {scenes.map((scene, i) => (
            <div
              key={i}
              className="panel-hover relative rounded-lg overflow-hidden cursor-pointer h-full"
              style={{
                animationDelay: scene.delay,
                border: active === i ? `2px solid ${scene.color}` : '2px solid rgba(255,255,255,0.06)',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                boxShadow: active === i ? `0 0 40px ${scene.color}40` : '0 4px 24px rgba(0,0,0,0.6)',
              }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              {/* Scene image */}
              <img
                src={scene.image}
                alt={scene.title}
                className="panel-img w-full h-full object-cover object-top"
                onError={(e) => { e.target.parentElement.style.background = '#1a1a1a' }}
              />

              {/* Always-on dark gradient from bottom */}
              <div className="absolute inset-0" style={{
                background: `linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.15) 70%, transparent 100%)`
              }} />

              {/* Color accent at top */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-lg" style={{ background: scene.color }} />

              {/* Book badge */}
              <div className="absolute top-3 left-3">
                <span className="text-xs font-bold px-2 py-0.5 rounded-full"
                  style={{ background: `${scene.color}cc`, color: '#fff', fontSize: '10px', letterSpacing: '0.1em' }}>
                  {scene.book}
                </span>
              </div>

              {/* Tag */}
              <div className="absolute top-3 right-3">
                <span className="text-xs text-gray-300 bg-black/60 px-2 py-0.5 rounded-full backdrop-blur-sm" style={{ fontSize: '10px' }}>
                  {scene.tag}
                </span>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                <p className="text-white font-bold font-serif text-sm md:text-base leading-tight mb-1"
                  style={{ textShadow: '0 1px 8px rgba(0,0,0,0.8)' }}>
                  {scene.hook}
                </p>
                <p className="panel-caption text-gray-300 text-xs italic">
                  {scene.sub}
                </p>
                {/* Color bar progress */}
                <div className="mt-2 h-0.5 rounded-full overflow-hidden bg-white/10">
                  <div className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: active === i ? '100%' : '30%',
                      background: scene.color,
                    }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTAs */}
      <div className="relative z-20 flex flex-col sm:flex-row items-center justify-center gap-4 py-8 px-6">
        <a
          href="#synopsis"
          className="px-8 py-3 text-white text-sm tracking-widest uppercase rounded-sm border transition-all"
          style={{ background: 'rgba(196,30,58,0.85)', borderColor: 'rgba(196,30,58,0.5)', letterSpacing: '0.2em', boxShadow: '0 0 20px rgba(196,30,58,0.25)' }}
        >
          {t('hero.cta1')}
        </a>
        <a
          href="#contact"
          className="px-8 py-3 bg-transparent text-gray-400 text-sm tracking-widest uppercase rounded-sm border border-gray-800 hover:border-gray-600 hover:text-white transition-all"
          style={{ letterSpacing: '0.2em' }}
        >
          {t('hero.cta2')}
        </a>
      </div>

      {/* Scroll cue */}
      <div className="relative z-20 flex justify-center pb-4">
        <a href="#synopsis" className="text-gray-700 hover:text-gray-500 transition-colors animate-bounce">
          <ChevronDown size={24} />
        </a>
      </div>
    </section>
  )
}
