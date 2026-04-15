import { useEffect } from 'react'
import { WorksGrid } from '@/widgets/works-grid'
import { Section } from '@/shared/ui/Section'
import { useMeta } from '@/shared/lib/useMeta'
import { works } from '@/shared/config/works'

export const WorksPage = () => {
  useMeta({
    title: 'Works',
    description: `${works.length}件の制作実績一覧。SaaS・ウェディング・建築・ホテル・法律・スキンケアなど多業種に対応。`,
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="pt-20">
      {/* ページヘッダー */}
      <div className="bg-gradient-to-br from-neutral-950 via-[#0d1f3c] to-[#1a1040] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <p className="text-primary-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Works
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            制作実績
          </h1>
          <p className="mt-4 text-neutral-300/80 text-base md:text-lg max-w-xl leading-relaxed">
            業種やターゲットに合わせたWebサイト制作の実績を掲載しています。
          </p>
        </div>
      </div>

      {/* グリッド */}
      <Section>
        <WorksGrid />
      </Section>
    </main>
  )
}
