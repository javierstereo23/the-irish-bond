import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import CloverIcon from './ui/CloverIcon'
import FadeIn from './ui/FadeIn'
import { useLanguage } from '../hooks/useLanguage'

export default function Hero() {
  const { t } = useLanguage()
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleMouse = (e) =>
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener('mousemove', handleMouse)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('mousemove', handleMouse)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="fixed top-0 left-0 z-50 h-0.5 transition-all duration-150"
        style={{ width: `${scrollProgress}%`, background: 'linear-gradient(90deg, #2d7a3a, #d4a853)' }}
      />

      <div className="absolute inset-0 bg-black">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(ellipse at ${30 + mousePos.x * 40}% ${30 + mousePos.y * 40}%, rgba(45,122,58,0.3) 0%, transparent 60%),
                         radial-gradient(ellipse at ${70 - mousePos.x * 20}% ${60 + mousePos.y * 20}%, rgba(212,168,83,0.15) 0%, transparent 50%)`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.4) 50%, rgba(8,8,8,1) 100%)' }}
        />
      </div>

      <div className="absolute inset-0 opacity-5 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"
            style={{ top: `${8 + i * 8}%`, left: '-10%', right: '-10%' }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <FadeIn delay={0.2}>
          <div className="flex justify-center mb-8">
            <CloverIcon
              color="#c41e3a"
              className="w-20 h-20 md:w-28 md:h-28"
              style={{ filter: 'drop-shadow(0 0 30px rgba(196,30,58,0.5))' }}
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <p className="text-sm md:text-base tracking-widest text-green-400/80 uppercase mb-4" style={{ letterSpacing: '0.3em' }}>
            {t('hero.presents')}
          </p>
        </FadeIn>

        <FadeIn delay={0.7}>
          <h1
            className="text-5xl md:text-8xl lg:text-9xl font-bold text-white mb-2 leading-none font-serif"
            style={{ textShadow: '0 0 80px rgba(45,122,58,0.3)' }}
          >
            KING<span className="text-green-500 italic font-light text-4xl md:text-6xl lg:text-7xl align-middle mx-3">of</span>SPEED
          </h1>
        </FadeIn>

        <FadeIn delay={0.9}>
          <p className="text-lg md:text-xl text-gray-400 mt-6 mb-2 font-serif italic">
            {t('hero.book1Sub')}
          </p>
        </FadeIn>

        <FadeIn delay={1.1}>
          <div className="mt-8 max-w-2xl mx-auto">
            <p className="text-base md:text-lg text-gray-500 leading-relaxed font-serif italic">
              &ldquo;{t('hero.quote')}&rdquo;
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={1.4}>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#synopsis"
              className="px-8 py-3 hover:bg-green-700 text-white text-sm tracking-widest uppercase transition-all rounded-sm border border-green-700/50 hover:shadow-lg hover:shadow-green-900/30"
              style={{ letterSpacing: '0.2em' }}
            >
              {t('hero.cta1')}
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-transparent hover:bg-white/5 text-gray-300 text-sm tracking-widest uppercase transition-all rounded-sm border border-gray-700 hover:border-gray-500"
              style={{ letterSpacing: '0.2em' }}
            >
              {t('hero.cta2')}
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={1.7}>
          <a href="#synopsis" className="inline-block mt-16 animate-bounce text-gray-600 hover:text-gray-400 transition-colors">
            <ChevronDown size={28} />
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
