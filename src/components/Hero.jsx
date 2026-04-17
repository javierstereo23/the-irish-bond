import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import CloverIcon from './ui/CloverIcon'
import FadeIn from './ui/FadeIn'
import { useLanguage } from '../hooks/useLanguage'

const heroStyles = `
  @keyframes clover-pulse {
    0%, 100% { transform: scale(1); filter: drop-shadow(0 0 24px rgba(196,30,58,0.7)) drop-shadow(0 0 60px rgba(196,30,58,0.3)); }
    50% { transform: scale(1.08); filter: drop-shadow(0 0 48px rgba(196,30,58,1)) drop-shadow(0 0 100px rgba(196,30,58,0.5)) drop-shadow(0 0 160px rgba(196,30,58,0.2)); }
  }
  @keyframes clover-spin-slow {
    0% { transform: rotate(-4deg); }
    50% { transform: rotate(4deg); }
    100% { transform: rotate(-4deg); }
  }
  @keyframes ring-expand {
    0% { transform: scale(0.8); opacity: 0.6; }
    100% { transform: scale(2.4); opacity: 0; }
  }
  @keyframes ring-expand-2 {
    0% { transform: scale(0.8); opacity: 0.4; }
    100% { transform: scale(2.8); opacity: 0; }
  }
  @keyframes title-glow {
    0%, 100% { text-shadow: 0 0 40px rgba(196,30,58,0.2), 0 0 80px rgba(196,30,58,0.1); }
    50% { text-shadow: 0 0 60px rgba(196,30,58,0.4), 0 0 120px rgba(196,30,58,0.2); }
  }
  @keyframes line-slide {
    0% { transform: scaleX(0); opacity: 0; }
    100% { transform: scaleX(1); opacity: 1; }
  }
  .clover-anim {
    animation: clover-pulse 3s ease-in-out infinite, clover-spin-slow 6s ease-in-out infinite;
  }
  .ring-1 {
    animation: ring-expand 3s ease-out infinite;
  }
  .ring-2 {
    animation: ring-expand-2 3s ease-out infinite 1s;
  }
  .title-glow {
    animation: title-glow 4s ease-in-out infinite;
  }
`

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
      <style>{heroStyles}</style>

      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 z-50 h-0.5 transition-all duration-150"
        style={{ width: `${scrollProgress}%`, background: 'linear-gradient(90deg, #c41e3a, #d4a853, #2d7a3a)' }}
      />

      {/* Background */}
      <div className="absolute inset-0 bg-black">
        {/* Mouse-tracking gradient — crimson + gold */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at ${30 + mousePos.x * 40}% ${20 + mousePos.y * 40}%, rgba(196,30,58,0.18) 0%, transparent 55%),
              radial-gradient(ellipse at ${70 - mousePos.x * 20}% ${70 + mousePos.y * 20}%, rgba(212,168,83,0.08) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 50%, rgba(196,30,58,0.06) 0%, transparent 70%)
            `,
          }}
        />
        {/* Bottom fade to site bg */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 60%, rgba(8,8,8,1) 100%)' }}
        />
        {/* Subtle horizontal speed lines */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-px"
              style={{
                top: `${6 + i * 6}%`,
                left: '-10%', right: '-10%',
                background: 'linear-gradient(90deg, transparent, rgba(196,30,58,0.8), transparent)',
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

        {/* Animated clover */}
        <FadeIn delay={0.1}>
          <div className="flex justify-center mb-10">
            <div className="relative flex items-center justify-center">
              {/* Expanding rings */}
              <div
                className="ring-1 absolute rounded-full border"
                style={{ width: '140px', height: '140px', borderColor: 'rgba(196,30,58,0.4)' }}
              />
              <div
                className="ring-2 absolute rounded-full border"
                style={{ width: '140px', height: '140px', borderColor: 'rgba(196,30,58,0.25)' }}
              />
              {/* Red glow disc behind clover */}
              <div
                className="absolute rounded-full"
                style={{
                  width: '120px', height: '120px',
                  background: 'radial-gradient(circle, rgba(196,30,58,0.25) 0%, transparent 70%)',
                }}
              />
              <CloverIcon
                color="#c41e3a"
                className="clover-anim w-24 h-24 md:w-32 md:h-32 relative z-10"
              />
            </div>
          </div>
        </FadeIn>

        {/* Authors byline */}
        <FadeIn delay={0.4}>
          <p
            className="text-sm md:text-base text-green-400/70 uppercase mb-6"
            style={{ letterSpacing: '0.35em' }}
          >
            {t('hero.presents')}
          </p>
        </FadeIn>

        {/* Decorative line */}
        <FadeIn delay={0.55}>
          <div className="flex items-center gap-4 justify-center mb-6">
            <div className="h-px w-16 md:w-32" style={{ background: 'linear-gradient(90deg, transparent, rgba(196,30,58,0.6))' }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#c41e3a' }} />
            <div className="h-px w-16 md:w-32" style={{ background: 'linear-gradient(90deg, rgba(196,30,58,0.6), transparent)' }} />
          </div>
        </FadeIn>

        {/* Main title */}
        <FadeIn delay={0.7}>
          <h1
            className="title-glow font-bold text-white leading-none font-serif"
            style={{ fontSize: 'clamp(3.5rem, 12vw, 9rem)' }}
          >
            KING
            <span
              className="italic font-light align-middle mx-3 md:mx-4"
              style={{ fontSize: 'clamp(2rem, 7vw, 5.5rem)', color: '#c41e3a' }}
            >
              of
            </span>
            SPEED
          </h1>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn delay={0.9}>
          <p className="text-lg md:text-xl text-gray-400 mt-5 font-serif italic tracking-wider">
            {t('hero.book1Sub')}
          </p>
        </FadeIn>

        {/* Decorative divider */}
        <FadeIn delay={1.0}>
          <div className="flex items-center gap-3 justify-center mt-8 mb-8">
            <div className="h-px w-8" style={{ background: 'rgba(196,30,58,0.4)' }} />
            <span className="text-xs tracking-widest text-gray-600 uppercase" style={{ letterSpacing: '0.4em' }}>The Irish Bond</span>
            <div className="h-px w-8" style={{ background: 'rgba(196,30,58,0.4)' }} />
          </div>
        </FadeIn>

        {/* Quote */}
        <FadeIn delay={1.1}>
          <div className="max-w-2xl mx-auto px-4">
            <p className="text-base md:text-lg text-gray-400 leading-relaxed font-serif italic">
              &ldquo;{t('hero.quote')}&rdquo;
            </p>
          </div>
        </FadeIn>

        {/* CTAs */}
        <FadeIn delay={1.4}>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#synopsis"
              className="px-8 py-3.5 text-white text-sm tracking-widest uppercase transition-all rounded-sm border hover:shadow-xl"
              style={{
                background: 'rgba(196,30,58,0.85)',
                borderColor: 'rgba(196,30,58,0.6)',
                letterSpacing: '0.2em',
                boxShadow: '0 0 20px rgba(196,30,58,0.2)',
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 40px rgba(196,30,58,0.5)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(196,30,58,0.2)'}
            >
              {t('hero.cta1')}
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 bg-transparent text-gray-300 text-sm tracking-widest uppercase transition-all rounded-sm border border-gray-700 hover:border-gray-500 hover:bg-white/5"
              style={{ letterSpacing: '0.2em' }}
            >
              {t('hero.cta2')}
            </a>
          </div>
        </FadeIn>

        {/* Scroll cue */}
        <FadeIn delay={1.8}>
          <a href="#synopsis" className="inline-block mt-16 text-gray-600 hover:text-gray-400 transition-colors" style={{ animation: 'bounce 2s infinite' }}>
            <ChevronDown size={28} />
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
