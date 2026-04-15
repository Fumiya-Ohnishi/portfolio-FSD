import { useEffect, useState, lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { ArrowDown, ArrowRight } from 'lucide-react'

const HeroCanvas = lazy(() =>
  import('./HeroCanvas').then((m) => ({ default: m.HeroCanvas }))
)

export const Hero = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-[#0d1f3c] to-[#1a0a3d]" />

      {/* Three.js キャンバス */}
      <Suspense fallback={null}>
        <HeroCanvas />
      </Suspense>

      {/* ノイズテクスチャ風オーバーレイ */}
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.4\'/%3E%3C/svg%3E")',
          backgroundSize: '200px 200px',
        }}
      />

      {/* コンテンツ */}
      <div className="relative z-10 flex-1 flex flex-col items-start justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div
          className={`
            max-w-3xl transition-all duration-1000
            ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          {/* eyebrow */}
          <p
            className="text-primary-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-5 flex items-center gap-2"
            style={{ transitionDelay: '100ms' }}
          >
            <span className="inline-block w-8 h-px bg-primary-400" />
            Frontend Engineer / Web Creator
          </p>

          {/* メインタイトル */}
          <h1 className="font-display font-bold text-white leading-[1.1]">
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-1">
              業種に合わせた
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-1">
              世界観を、
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-300 bg-clip-text text-transparent">
                コードで形に。
              </span>
            </span>
          </h1>

          {/* サブコピー */}
          <p
            className={`
              mt-6 md:mt-8 text-neutral-300/80 text-base sm:text-lg leading-relaxed max-w-xl
              transition-all duration-700 delay-300
              ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
          >
            React・TypeScript・Viteを中心に、LPからWebアプリまで。
            高級感から親しみやすさまで幅広いテイストで制作します。
          </p>

          {/* CTA */}
          <div
            className={`
              mt-8 md:mt-10 flex flex-wrap gap-4
              transition-all duration-700 delay-500
              ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
          >
            <Link
              to="/works"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-neutral-900 rounded-xl font-semibold text-sm hover:bg-neutral-100 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              制作実績を見る
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-white rounded-xl font-semibold text-sm border border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-200"
            >
              お問い合わせ
            </Link>
          </div>
        </div>

        {/* スクロールインジケーター */}
        <div
          className={`
            absolute bottom-8 left-1/2 -translate-x-1/2
            flex flex-col items-center gap-2 text-white/40
            transition-all duration-700 delay-700
            ${loaded ? 'opacity-100' : 'opacity-0'}
          `}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="animate-bounce">
            <ArrowDown size={16} />
          </div>
        </div>
      </div>
    </section>
  )
}
