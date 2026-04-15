import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { WorkCard } from '@/entities/work'
import { getFeaturedWorks, works } from '@/shared/config/works'
import { Section, SectionHeader } from '@/shared/ui/Section'
import { useScrollAnimation } from '@/shared/lib/useScrollAnimation'

const EmptyFallback = () => (
  <div className="col-span-full py-20 text-center text-neutral-400">
    <p className="text-lg">作品はまだありません。</p>
  </div>
)

export const FeaturedWorks = () => {
  const { ref, isVisible } = useScrollAnimation()
  const featured = getFeaturedWorks()
  const displayWorks = featured.length > 0 ? featured.slice(0, 6) : works.slice(0, 6)

  return (
    <Section id="works">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 md:mb-16">
          <SectionHeader
            eyebrow="Selected Works"
            title="制作実績"
            description="業種・テイストを問わず、多様なWebサイト制作に対応。"
            className="mb-0"
          />
          <Link
            to="/works"
            className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-sm group whitespace-nowrap flex-shrink-0"
          >
            すべて見る
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {displayWorks.length === 0 ? (
          <div className="grid">
            <EmptyFallback />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {displayWorks.map((work, i) => (
              <div
                key={work.id}
                className="transition-all duration-500"
                style={{ transitionDelay: `${i * 80}ms`, opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(16px)' }}
              >
                <WorkCard work={work} />
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            to="/works"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-neutral-900 text-white rounded-xl font-semibold text-sm hover:bg-neutral-700 transition-all duration-200 group"
          >
            全{works.length}件の実績を見る
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </Section>
  )
}
