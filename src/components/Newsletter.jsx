import { useState } from 'react'
import FadeIn from './ui/FadeIn'
import { SectionLabel } from './Synopsis'
import { useLanguage } from '../hooks/useLanguage'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID'

export default function Newsletter() {
  const { t, lang } = useLanguage()
  const [form, setForm] = useState({ name: '', email: '' })
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="newsletter" className="relative py-24 md:py-32 bg-gradient-to-b from-bg-main to-[#0a0808]">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <FadeIn>
          <SectionLabel>{t('newsletter.label')}</SectionLabel>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl text-white font-bold mb-4 font-serif">
            {t('newsletter.title')}
          </h2>
          <p className="text-gray-400 mb-10 text-lg">{t('newsletter.subtitle')}</p>
        </FadeIn>

        <FadeIn delay={0.2}>
          {status === 'success' ? (
            <div className="py-8 text-gold font-serif text-lg">
              {t('newsletter.success')}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                placeholder={t('newsletter.namePlaceholder')}
                className="flex-1 px-4 py-3 bg-bg-card border border-gray-800 rounded-sm text-white text-sm placeholder-gray-600 focus:outline-none focus:border-green-700/60 transition-colors"
              />
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                placeholder={t('newsletter.emailPlaceholder')}
                className="flex-1 px-4 py-3 bg-bg-card border border-gray-800 rounded-sm text-white text-sm placeholder-gray-600 focus:outline-none focus:border-green-700/60 transition-colors"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-3 text-white text-sm tracking-widest uppercase rounded-sm border transition-all disabled:opacity-50"
                style={{ background: '#2d7a3a', borderColor: 'rgba(196,30,58,0.5)', letterSpacing: '0.15em' }}
              >
                {status === 'loading' ? '...' : t('newsletter.cta')}
              </button>
            </form>
          )}
          {status === 'error' && (
            <p className="text-green-600/60 text-xs mt-3">
              {lang === 'es' ? 'Hubo un error. Intentá de nuevo.' : 'Something went wrong. Please try again.'}
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  )
}
