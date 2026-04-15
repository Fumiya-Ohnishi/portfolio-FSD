import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { getWorkBySlug, getRelatedWorks } from '@/shared/config/works'
import { WorkCard } from '@/entities/work'
import { Tag } from '@/shared/ui/Tag'
import { Section } from '@/shared/ui/Section'
import { useMeta } from '@/shared/lib/useMeta'

const NotFound = () => (
  <main className="pt-24 min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h1 className="font-display text-4xl font-bold text-neutral-900 mb-4">
        作品が見つかりません
      </h1>
      <p className="text-neutral-500 mb-8">
        お探しの作品は存在しないか、移動された可能性があります。
      </p>
      <Link
        to="/works"
        className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-xl font-medium hover:bg-neutral-700 transition-colors"
      >
        <ArrowLeft size={16} />
        一覧に戻る
      </Link>
    </div>
  </main>
)

const toneGradients: Record<string, string> = {
  'Smart / Modern': 'from-blue-900 via-indigo-900 to-neutral-950',
  'Elegant / Romantic': 'from-pink-900 via-rose-900 to-neutral-950',
  'Minimal / Luxury': 'from-neutral-800 via-stone-900 to-neutral-950',
  'Premium / Escape': 'from-sky-900 via-cyan-900 to-neutral-950',
  'Trust / Formal': 'from-slate-800 via-blue-900 to-neutral-950',
  'Friendly / Bright': 'from-orange-800 via-yellow-900 to-neutral-950',
  'Calm / Healing': 'from-emerald-900 via-teal-900 to-neutral-950',
  'Clean / Premium': 'from-neutral-800 via-slate-900 to-neutral-950',
  'Elegant / Medical Luxury': 'from-indigo-900 via-purple-900 to-neutral-950',
  'Warm / Friendly': 'from-amber-900 via-orange-900 to-neutral-950',
}

export const WorkDetailPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const work = slug ? getWorkBySlug(slug) : undefined

  useMeta({
    title: work ? work.title : '作品詳細',
    description: work?.summary,
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!work) return <NotFound />

  const relatedWorks = getRelatedWorks(work)
  const gradient = toneGradients[work.tone] || 'from-neutral-800 to-neutral-950'

  return (
    <main className="pt-20">
      {/* ヒーロー */}
      <div className={`bg-gradient-to-br ${gradient} text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* パンくず */}
          <Link
            to="/works"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={14} />
            一覧に戻る
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="lg:col-span-3">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-white/50 mb-3">
                {work.category}
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                {work.title}
              </h1>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                {work.summary}
              </p>
              <div className="mt-6">
                <a
                  href={work.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-neutral-900 rounded-xl font-semibold text-sm hover:bg-neutral-100 transition-all duration-200 shadow-lg"
                >
                  サイトを見る
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
            <div className="lg:col-span-2 flex flex-wrap gap-2 content-start lg:justify-end">
              <div className="w-full">
                <p className="text-xs text-white/40 tracking-widest uppercase mb-3">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {work.techStack?.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 border border-white/20 text-white text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {!work.techStack && (
                    <span className="text-white/30 text-sm">—</span>
                  )}
                </div>
              </div>
              <div className="w-full mt-4">
                <p className="text-xs text-white/40 tracking-widest uppercase mb-2">Tone</p>
                <span className="px-3 py-1 bg-white/10 border border-white/20 text-white text-xs rounded-full">
                  {work.tone}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 作品サムネイルプレビューエリア */}
      <div className="bg-neutral-100 py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-neutral-200">
            {work.thumbnail ? (
              <img
                src={work.thumbnail}
                alt={work.title}
                className="w-full h-auto"
              />
            ) : (
              <div
                className={`
                  w-full aspect-video bg-gradient-to-br
                  flex flex-col items-center justify-center
                  ${toneGradients[work.tone]?.replace('via-', 'via-').replace('to-neutral-950', 'to-neutral-900') || 'from-neutral-200 to-neutral-100'}
                `}
              >
                <div className="text-center px-8">
                  <div className="font-display text-4xl md:text-6xl font-bold text-white/30 mb-3">
                    {work.title}
                  </div>
                  <a
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {work.url}
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 詳細コンテンツ */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {/* 概要 */}
            {work.description && (
              <div className="md:col-span-2">
                <h2 className="font-display text-2xl font-bold text-neutral-900 mb-4">
                  プロジェクト概要
                </h2>
                <p className="text-neutral-600 leading-relaxed">{work.description}</p>
              </div>
            )}

            {/* コンセプト */}
            {work.concept && (
              <div className="md:col-span-2">
                <h2 className="font-display text-2xl font-bold text-neutral-900 mb-4">
                  デザインコンセプト
                </h2>
                <p className="text-neutral-600 leading-relaxed">{work.concept}</p>
              </div>
            )}

            {/* 工夫した点 */}
            {work.highlights && work.highlights.length > 0 && (
              <div className="md:col-span-2">
                <h2 className="font-display text-2xl font-bold text-neutral-900 mb-5">
                  工夫した点
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {work.highlights.map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 bg-neutral-50 rounded-xl p-4 border border-neutral-200"
                    >
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-600 text-xs font-bold flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      <p className="text-neutral-700 text-sm leading-relaxed">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 公開URL */}
            <div className="md:col-span-2">
              <h2 className="font-display text-2xl font-bold text-neutral-900 mb-4">
                公開URL
              </h2>
              <a
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-6 py-4 bg-white border border-neutral-200 rounded-xl hover:border-primary-300 hover:bg-primary-50 transition-all duration-200"
              >
                <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center">
                  <ExternalLink size={14} className="text-primary-600" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 mb-0.5">Published URL</div>
                  <div className="text-sm text-primary-600 group-hover:text-primary-700 font-medium break-all">
                    {work.url}
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* 関連作品 */}
      {relatedWorks.length > 0 && (
        <Section className="bg-neutral-50">
          <div>
            <h2 className="font-display text-3xl font-bold text-neutral-900 mb-10">
              関連作品
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedWorks.map((related) => (
                <WorkCard key={related.id} work={related} />
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* 一覧へ戻る */}
      <Section tight className="border-t border-neutral-100">
        <div className="text-center">
          <Link
            to="/works"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-neutral-900 text-white rounded-xl font-semibold text-sm hover:bg-neutral-700 transition-all duration-200"
          >
            <ArrowLeft size={16} />
            一覧に戻る
          </Link>
        </div>
      </Section>
    </main>
  )
}
