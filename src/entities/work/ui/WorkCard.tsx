import { Link } from 'react-router-dom'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { Tag } from '@/shared/ui/Tag'
import type { Work } from '@/shared/types'

interface WorkCardProps {
  work: Work
  featured?: boolean
}

const toneColors: Record<string, string> = {
  'Smart / Modern': 'from-blue-50 to-indigo-50',
  'Elegant / Romantic': 'from-pink-50 to-rose-50',
  'Minimal / Luxury': 'from-neutral-100 to-stone-50',
  'Premium / Escape': 'from-sky-50 to-cyan-50',
  'Trust / Formal': 'from-slate-50 to-blue-50',
  'Friendly / Bright': 'from-yellow-50 to-orange-50',
  'Calm / Healing': 'from-green-50 to-teal-50',
  'Clean / Premium': 'from-white to-neutral-50',
  'Elegant / Medical Luxury': 'from-indigo-50 to-purple-50',
  'Warm / Friendly': 'from-amber-50 to-orange-50',
}

const toneAccents: Record<string, string> = {
  'Smart / Modern': 'bg-blue-100 text-blue-700',
  'Elegant / Romantic': 'bg-pink-100 text-pink-700',
  'Minimal / Luxury': 'bg-stone-100 text-stone-700',
  'Premium / Escape': 'bg-sky-100 text-sky-700',
  'Trust / Formal': 'bg-slate-100 text-slate-700',
  'Friendly / Bright': 'bg-yellow-100 text-yellow-700',
  'Calm / Healing': 'bg-green-100 text-green-700',
  'Clean / Premium': 'bg-neutral-100 text-neutral-700',
  'Elegant / Medical Luxury': 'bg-indigo-100 text-indigo-700',
  'Warm / Friendly': 'bg-amber-100 text-amber-700',
}

export const WorkCard = ({ work, featured = false }: WorkCardProps) => {
  const gradientClass = toneColors[work.tone] || 'from-neutral-50 to-gray-50'
  const accentClass = toneAccents[work.tone] || 'bg-neutral-100 text-neutral-700'

  return (
    <article
      className={`
        group bg-white rounded-2xl border border-neutral-200/80 overflow-hidden
        shadow-card hover:shadow-card-hover
        transition-all duration-300 hover:-translate-y-1
        ${featured ? 'col-span-1 md:col-span-2 lg:col-span-1' : ''}
      `}
    >
      {/* サムネイル */}
      <Link to={`/works/${work.slug}`} className="block relative overflow-hidden">
        <div
          className={`
            w-full bg-gradient-to-br ${gradientClass}
            ${featured ? 'h-56 md:h-64' : 'h-48'}
            flex items-center justify-center
            transition-transform duration-500 group-hover:scale-105
          `}
        >
          {work.thumbnail ? (
            <img
              src={work.thumbnail}
              alt={work.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="text-center px-8">
              <div className="font-display text-2xl md:text-3xl font-bold text-neutral-700/50 leading-tight">
                {work.title}
              </div>
              <div className="mt-2 text-xs text-neutral-500 tracking-widest uppercase">
                {work.category}
              </div>
            </div>
          )}
        </div>
        {/* ホバーオーバーレイ */}
        <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/5 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full px-5 py-2.5 flex items-center gap-2 text-sm font-medium text-neutral-800 shadow-sm">
            詳細を見る
            <ArrowRight size={14} />
          </div>
        </div>
      </Link>

      {/* コンテンツ */}
      <div className="p-5 md:p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <span className="text-2xs font-semibold text-neutral-400 tracking-widest uppercase block mb-1">
              {work.category}
            </span>
            <h3 className="font-display text-xl font-bold text-neutral-900 leading-tight group-hover:text-primary-700 transition-colors">
              <Link to={`/works/${work.slug}`}>{work.title}</Link>
            </h3>
          </div>
          <a
            href={work.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-shrink-0 p-2 rounded-lg text-neutral-400 hover:text-primary-600 hover:bg-primary-50 transition-colors"
            aria-label="サイトを開く"
          >
            <ExternalLink size={16} />
          </a>
        </div>

        <p className="text-neutral-600 text-sm leading-relaxed mb-4 line-clamp-2">
          {work.summary}
        </p>

        <div className="flex flex-wrap gap-2 items-center">
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${accentClass}`}
          >
            {work.tone}
          </span>
          {work.techStack?.slice(0, 2).map((tech) => (
            <Tag key={tech} label={tech} variant="muted" />
          ))}
          {work.techStack && work.techStack.length > 2 && (
            <Tag label={`+${work.techStack.length - 2}`} variant="muted" />
          )}
        </div>
      </div>
    </article>
  )
}
