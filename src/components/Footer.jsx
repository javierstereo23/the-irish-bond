import CloverIcon from './ui/CloverIcon'
import { useLanguage } from '../hooks/useLanguage'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-black border-t border-gray-900/50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <CloverIcon className="w-6 h-6" />
            <span className="text-base tracking-widest text-gray-400 font-serif">THE IRISH BOND</span>
          </div>

          <p className="text-sm text-gray-600 text-center">
            &copy; {new Date().getFullYear()} {t('footer.copyright')}
            <br />
            <span className="text-gray-700">{t('footer.tagline')}</span>
          </p>

          <div className="flex gap-4">
            {['BookTok', 'Instagram', 'TikTok'].map((s, i) => (
              <span key={s} className="flex items-center gap-4">
                <span className="text-sm text-gray-600 tracking-wider uppercase hover:text-gray-400 cursor-default transition-colors">
                  {s}
                </span>
                {i < 2 && <span className="text-gray-800">|</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
