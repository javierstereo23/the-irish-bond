import { Play } from 'lucide-react'
import FadeIn from './ui/FadeIn'
import CloverIcon from './ui/CloverIcon'
import { useLanguage } from '../hooks/useLanguage'

export default function Teaser() {
  const { t } = useLanguage()

  return (
    <section id="teaser" className="relative py-0 bg-black overflow-hidden" style={{ minHeight: '60vh' }}>
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(196,30,58,0.08) 0%, #000 70%)' }} />

      <div className="relative max-w-5xl mx-auto px-6 py-24">
        <FadeIn>
          <div
            className="relative w-full rounded-lg overflow-hidden border border-red-900/20"
            style={{ paddingTop: '56.25%' }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6"
              style={{ background: 'linear-gradient(135deg, #0d0d0d 0%, #080808 100%)' }}
            >
              <div className="absolute inset-0 opacity-5">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="absolute h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"
                    style={{ top: `${15 + i * 10}%`, left: '-10%', right: '-10%' }} />
                ))}
              </div>

              <CloverIcon className="w-16 h-16 opacity-30" />

              <div className="text-center z-10">
                <p className="text-xs tracking-widest text-red-500/60 uppercase mb-3" style={{ letterSpacing: '0.3em' }}>
                  {t('teaser.label')}
                </p>
                <h3 className="text-2xl md:text-4xl font-bold text-white font-serif mb-2">
                  {t('teaser.title')}
                </h3>
                <p className="text-gray-500 text-sm">{t('teaser.subtitle')}</p>
              </div>

              <button
                className="w-16 h-16 rounded-full border-2 border-red-700/50 flex items-center justify-center text-red-500 hover:border-red-500 hover:text-red-400 transition-all hover:scale-110 z-10"
                style={{ background: 'rgba(196,30,58,0.1)' }}
                disabled
                aria-label="Play teaser"
              >
                <Play size={24} fill="currentColor" />
              </button>

              <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-red-900/40" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-red-900/40" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-red-900/40" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-red-900/40" />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
