import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Works', href: '/works' },
  { label: 'Strengths', href: '/strengths' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // ホーム以外のページ、またはスクロール済みの場合はライトスタイルを適用
  const isLight = scrolled || location.pathname !== '/'

  useEffect(() => {
    // ページ遷移時にスクロール位置をリセット判定
    setScrolled(window.scrollY > 40)

    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const isActive = (href: string) => location.pathname === href

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${isLight
          ? 'bg-white/90 backdrop-blur-md border-b border-neutral-200/60 shadow-sm py-3'
          : 'bg-transparent py-5'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* ロゴ */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
          aria-label="Fumiya Ohnishi - トップへ"
        >
          <div
            className={`
              w-8 h-8 rounded-lg flex items-center justify-center
              transition-all duration-300
              ${isLight ? 'bg-primary-600' : 'bg-white/20 border border-white/30'}
            `}
          >
            <span
              className={`
                font-display font-bold text-base leading-none
                text-white
              `}
            >
              F
            </span>
          </div>
          <span
            className={`
              font-display font-semibold text-lg tracking-tight
              transition-colors duration-300
              ${isLight ? 'text-neutral-900' : 'text-white'}
            `}
          >
            Fumiya Ohnishi
          </span>
        </Link>

        {/* デスクトップナビ */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`
                px-4 py-2 rounded-lg text-sm font-medium
                transition-all duration-200
                ${isActive(item.href)
                  ? isLight
                    ? 'bg-primary-50 text-primary-700'
                    : 'bg-white/20 text-white'
                  : isLight
                  ? 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
                }
              `}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* モバイルハンバーガー */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            md:hidden p-2 rounded-lg
            transition-colors duration-200
            ${isLight
              ? 'text-neutral-700 hover:bg-neutral-100'
              : 'text-white hover:bg-white/10'
            }
          `}
          aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* モバイルメニュー */}
      <div
        className={`
          md:hidden fixed inset-0 top-0 z-[-1]
          transition-opacity duration-300
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      >
        <div
          className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        <div
          className={`
            absolute top-0 right-0 w-72 h-full bg-white shadow-2xl
            flex flex-col pt-20 pb-8 px-6
            transition-transform duration-300
            ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          <nav className="flex flex-col gap-1">
            <Link
              to="/"
              className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                location.pathname === '/'
                  ? 'bg-primary-50 text-primary-700'
                  : 'text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              Home
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto pt-6 border-t border-neutral-100">
            <p className="text-xs text-neutral-400 text-center">
              © 2024 Fumiya Ohnishi
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
