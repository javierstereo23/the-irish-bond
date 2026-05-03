import { useEffect, useRef } from 'react'
import { BookOpen, X } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

export default function SynopsisModal({ open, onClose }) {
  const { t } = useLanguage()
  const closeBtnRef = useRef(null)
  const tags = t('synopsis.tags')
  const tropes = t('synopsis.tropes')

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    closeBtnRef.current?.focus()
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="synopsis-modal-title"
      className="fixed inset-0 z-[100] flex items-start md:items-center justify-center"
    >
      {/* Overlay */}
      <button
        type="button"
        aria-label={t('synopsis.close')}
        onClick={onClose}
        className="absolute inset-0 bg-black/85 backdrop-blur-sm cursor-default"
      />

      {/* Panel */}
      <div className="relative z-10 w-full max-w-5xl mx-auto my-8 md:my-12 bg-bg-main border border-green-900/30 rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-bg-main/95 backdrop-blur border-b border-gray-800/60">
          <span className="text-sm tracking-widest text-green-500/80 uppercase" style={{ letterSpacing: '0.3em' }}>
            {t('synopsis.label')}
          </span>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-1"
            aria-label={t('synopsis.close')}
          >
            <X size={22} />
          </button>
        </div>

        {/* Body — scroll contained */}
        <div className="max-h-[80vh] overflow-y-auto px-6 md:px-10 py-8 md:py-12">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-3 space-y-6">
              <h2
                id="synopsis-modal-title"
                className="text-3xl md:text-5xl text-white font-bold leading-tight font-serif"
              >
                {t('synopsis.title1')}<br />
                <span className="text-green-500">{t('synopsis.title2')}</span><br />
                {t('synopsis.title3')}
              </h2>

              {['p1', 'p2', 'p3'].map((k) => (
                <p key={k} className="text-gray-300 leading-relaxed text-lg md:text-xl">
                  {t(`synopsis.${k}`)}
                </p>
              ))}

              <div className="pt-4 flex flex-wrap gap-3">
                {Array.isArray(tags) && tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm tracking-wider text-green-400/90 border border-green-900/40 rounded-full bg-green-950/20 uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-6 border-t border-gray-800/40">
                <p
                  className="text-sm tracking-widest text-green-500/70 uppercase mb-3"
                  style={{ letterSpacing: '0.25em' }}
                >
                  {t('synopsis.tropesTitle')}
                </p>
                <div className="flex flex-wrap gap-2">
                  {Array.isArray(tropes) && tropes.map((trope) => (
                    <span
                      key={trope}
                      className="px-3 py-1 text-sm text-gray-300 border border-gray-700/60 rounded-full bg-gray-900/40 italic"
                    >
                      {trope}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-b from-red-900/30 to-transparent rounded-lg blur-xl opacity-60" />
                <div className="relative bg-gradient-to-b from-gray-900 to-black rounded-lg p-8 border border-green-900/20">
                  <BookOpen className="text-green-600/60 mb-4" size={32} />
                  <blockquote className="text-gray-200 italic leading-relaxed font-serif text-lg">
                    {t('synopsis.quote1')}
                  </blockquote>
                  <p className="text-green-500/70 text-sm mt-4 tracking-wider uppercase">
                    {t('synopsis.quote1attr')}
                  </p>
                  <div className="mt-6 pt-6 border-t border-gray-800">
                    <blockquote className="text-gray-200 italic leading-relaxed font-serif text-lg">
                      {t('synopsis.quote2')}
                    </blockquote>
                    <p className="text-green-500/70 text-sm mt-4 tracking-wider uppercase">
                      {t('synopsis.quote2attr')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
