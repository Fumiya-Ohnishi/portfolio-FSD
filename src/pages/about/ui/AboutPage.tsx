import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, ArrowRight } from 'lucide-react'
import { profile } from '@/shared/config/profile'
import { socialLinks } from '@/shared/config/socialLinks'
import { Section, SectionHeader } from '@/shared/ui/Section'
import { useMeta } from '@/shared/lib/useMeta'

const CareerTimeline = () => (
  <div className="relative">
    {/* タイムラインライン */}
    <div className="absolute left-5 md:left-8 top-0 bottom-0 w-px bg-neutral-200" />

    <div className="space-y-8">
      {profile.career.map((item, i) => {
        const dotColors = {
          work: 'bg-primary-600',
          study: 'bg-accent-500',
          milestone: 'bg-amber-500',
        }
        return (
          <div key={i} className="relative flex items-start gap-6 md:gap-10">
            {/* ドット */}
            <div
              className={`
                relative z-10 flex-shrink-0 w-10 h-10 md:w-16 md:h-16
                flex items-center justify-center
              `}
            >
              <div
                className={`w-3 h-3 rounded-full ${dotColors[item.type]} ring-4 ring-white shadow-sm`}
              />
            </div>

            {/* コンテンツ */}
            <div className="flex-1 pb-4">
              <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase block mb-1">
                {item.period}
              </span>
              <h3 className="font-semibold text-neutral-900 mb-2">{item.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{item.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  </div>
)

const TechCategories = () => (
  <div className="space-y-6">
    {profile.techCategories.map((cat) => (
      <div key={cat.label}>
        <h4 className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-3">
          {cat.label}
        </h4>
        <div className="flex flex-wrap gap-2">
          {cat.techs.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 bg-white border border-neutral-200 text-neutral-700 text-sm rounded-lg hover:border-primary-300 hover:text-primary-700 hover:bg-primary-50 transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
)

export const AboutPage = () => {
  useMeta({
    title: 'About',
    description:
      'Fumiya Ohnishi のプロフィール。元自動車営業からWeb業界へ転身。React・TypeScript・Viteを中心にフロントエンド開発に取り組んでいます。',
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="pt-20">
      {/* ヘッダー */}
      <div className="bg-gradient-to-br from-neutral-950 via-[#0d1f3c] to-[#1a1040] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary-400 text-sm font-semibold tracking-widest uppercase mb-4">
                About
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-2">
                {profile.displayName}
              </h1>
              <p className="font-display text-lg text-white/50 mb-5">{profile.nameEn}</p>
              <p className="text-primary-300 font-medium mb-4">{profile.title}</p>
              <div className="flex items-center gap-2 text-white/40 text-sm">
                <MapPin size={14} />
                <span>{profile.location}</span>
              </div>
            </div>
            {/* プロフィール画像 */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-3xl overflow-hidden bg-gradient-to-br from-primary-800 to-accent-600 shadow-2xl border-2 border-white/10">
                <img
                  src="/profile.jpg"
                  alt={profile.displayName}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const t = e.currentTarget
                    t.style.display = 'none'
                    const p = t.parentElement
                    if (p) {
                      p.innerHTML = `<div class="w-full h-full flex items-center justify-center"><span class="font-display text-5xl font-bold text-white/30">FO</span></div>`
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 自己紹介 */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader eyebrow="Profile" title="自己紹介" />
          <div className="prose prose-neutral max-w-none">
            {profile.bioLong.split('\n\n').map((para, i) => (
              <p key={i} className="text-neutral-600 leading-relaxed mb-4 last:mb-0">
                {para}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* 経歴タイムライン */}
      <Section className="bg-neutral-50">
        <div className="max-w-3xl mx-auto">
          <SectionHeader eyebrow="Career" title="経歴" />
          <CareerTimeline />
        </div>
      </Section>

      {/* 強み */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader eyebrow="Strengths" title="強み" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profile.strengths.map((s, i) => (
              <div
                key={i}
                className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200"
              >
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-semibold text-neutral-900 mb-2">{s.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 制作で大切にしていること */}
      <Section className="bg-neutral-950 text-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Values"
            title="制作で大切にしていること"
            className="[&>h2]:text-white [&>p]:text-white/60"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {profile.values.map((v, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white/5 rounded-xl p-5 border border-white/10"
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-600/20 text-primary-400 text-xs font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <p className="text-white/80 text-sm leading-relaxed">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 技術スタック */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Tech Stack"
            title="使用技術"
            description="フロントエンドを中心に、幅広いスタックに対応しています。"
          />
          <TechCategories />
        </div>
      </Section>

      {/* SNSリンク */}
      <Section className="bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <SectionHeader eyebrow="Social" title="SNS・リンク" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-neutral-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-200 group"
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${link.bgColor} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
                >
                  {link.label[0]}
                </div>
                <div>
                  <div className="font-medium text-neutral-900 text-sm group-hover:text-primary-700 transition-colors">
                    {link.label}
                  </div>
                  <div className="text-xs text-neutral-500 line-clamp-1">
                    {link.description}
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium group"
            >
              お問い合わせはこちら
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </Section>
    </main>
  )
}
