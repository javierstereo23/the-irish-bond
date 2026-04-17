import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import CloverIcon from './ui/CloverIcon'
import { useLanguage } from '../hooks/useLanguage'

export default function Nav() {
  const { lang, setLang, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = [
    { key: 'synopsis', href: '#synopsis' },
    { key: 'characters', href: '#characters' },
    { key: 'saga', href: '#saga' },
    { key: 'editorial', href: '#editorial' },
    { key: 'authors', href: '#authors' },
    { key: 'contact', href: '#contact' },
  ]

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(8,8,8,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(45,122,58,0.2)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <CloverIcon className="w-8 h-8 transition-transform group-hover:rotate-12" />
          <span className="font-serif text-lg tracking-widest text-white">
            THE IRISH BOND
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors uppercase"
              style={{ letterSpacing: '0.15em' }}
            >
              {t(`nav.${l.key}`)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-xs tracking-widest">
            <button
              onClick={() => setLang('es')}
              className="px-2 py-1 transition-colors"
              style={{ color: lang === 'es' ? '#2d7a3a' : '#6b7280' }}
            >
              ES
            </button>
            <span className="text-gray-700">|</span>
            <button
              onClick={() => setLang('en')}
              className="px-2 py-1 transition-colors"
              style={{ color: lang === 'en' ? '#2d7a3a' : '#6b7280' }}
            >
              EN
            </button>
          </div>
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-red-900/20 px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-wider text-gray-300 hover:text-white uppercase py-2"
            >
              {t(`nav.${l.key}`)}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
