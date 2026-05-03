import FadeIn from '../ui/FadeIn'
import { useLanguage } from '../../hooks/useLanguage'

// variant: 'main' | 'altA' | 'altB' (para A/B testing)
export default function Hook({ variant = 'main' }) {
  const { t } = useLanguage()
  const line = t(`hook.${variant}`)

  return (
    <section id="hook" className="relative py-24 md:py-36 bg-gradient-to-b from-bg-main via-black to-bg-main overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(196,30,58,0.08) 0%, transparent 60%)',
        }}
      />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <p
            className="text-2xl md:text-4xl lg:text-5xl text-white font-serif italic leading-snug"
            style={{ textShadow: '0 0 40px rgba(196,30,58,0.15)' }}
          >
            “{line}”
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
