import { Link } from 'react-router-dom'
import { socialLinks } from '@/shared/config/socialLinks'
import { ExternalLink } from 'lucide-react'

const navLinks = [
  { label: 'Works', href: '/works' },
  { label: 'Strengths', href: '/strengths' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* ブランド */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="font-display text-2xl font-bold text-white">
                Fumiya Ohnishi
              </span>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
              業種やターゲットに合わせた世界観を、コードで形にするフロントエンドエンジニア。
            </p>
            <p className="text-neutral-500 text-xs mt-3">📍 愛媛県</p>
          </div>

          {/* ナビゲーション */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-5">
              Navigation
            </h3>
            <nav className="flex flex-col gap-3">
              <Link
                to="/"
                className="text-sm text-neutral-400 hover:text-white transition-colors"
              >
                Home
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* SNSリンク */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-5">
              Social
            </h3>
            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors group"
                >
                  <span>{link.label}</span>
                  <ExternalLink
                    size={12}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-600 text-xs">
            © {year} Fumiya Ohnishi. All rights reserved.
          </p>
          <p className="text-neutral-700 text-xs">
            Built with React + TypeScript + Vite + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
