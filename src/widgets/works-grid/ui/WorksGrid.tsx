import { useState, useMemo } from 'react'
import { WorkCard } from '@/entities/work'
import { works, getCategories } from '@/shared/config/works'

const EmptyFallback = () => (
  <div className="col-span-full py-20 text-center">
    <p className="text-neutral-400 text-lg">該当する作品がありません。</p>
    <p className="text-neutral-400 text-sm mt-2">フィルターを変更してみてください。</p>
  </div>
)

export const WorksGrid = () => {
  const categories = useMemo(() => getCategories(), [])
  const [activeCategory, setActiveCategory] = useState('ALL')

  const filtered = useMemo(() => {
    if (activeCategory === 'ALL') return works
    return works.filter((w) => w.category === activeCategory)
  }, [activeCategory])

  return (
    <div>
      {/* カテゴリフィルター */}
      <div className="mb-8 md:mb-12">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium
                transition-all duration-200
                ${activeCategory === cat
                  ? 'bg-neutral-900 text-white shadow-sm'
                  : 'bg-white text-neutral-600 border border-neutral-200 hover:border-neutral-400 hover:text-neutral-900'
                }
              `}
            >
              {cat}
              {cat === 'ALL' && (
                <span className="ml-1.5 text-xs opacity-60">({works.length})</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* グリッド */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filtered.length === 0 ? (
          <EmptyFallback />
        ) : (
          filtered.map((work, i) => (
            <div
              key={work.id}
              className="animate-fade-up"
              style={{ animationDelay: `${i * 60}ms`, animationFillMode: 'both' }}
            >
              <WorkCard work={work} />
            </div>
          ))
        )}
      </div>

      {filtered.length > 0 && (
        <p className="text-center text-neutral-400 text-sm mt-10">
          {filtered.length}件の実績を表示中
        </p>
      )}
    </div>
  )
}
