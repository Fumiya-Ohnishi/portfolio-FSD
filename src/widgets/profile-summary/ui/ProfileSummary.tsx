import { Link } from 'react-router-dom'
import { ArrowRight, MapPin } from 'lucide-react'
import { Section, SectionHeader } from '@/shared/ui/Section'
import { profile } from '@/shared/config/profile'
import { useScrollAnimation } from '@/shared/lib/useScrollAnimation'

export const ProfileSummary = () => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <Section className="bg-white">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* テキスト側 */}
          <div>
            <SectionHeader
              eyebrow="About Me"
              title="自己紹介"
              className="mb-6"
            />
            <p className="text-neutral-600 leading-relaxed mb-6">
              {profile.bio}
            </p>
            <div className="flex items-center gap-2 text-neutral-500 text-sm mb-8">
              <MapPin size={14} />
              <span>{profile.location}</span>
            </div>

            {/* 技術スタック抜粋 */}
            <div className="mb-8">
              <p className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-3">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Next.js', 'Vue.js', 'Figma'].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs font-medium rounded-full border border-neutral-200"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium group"
            >
              詳しいプロフィールを見る
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* プロフィール画像側 */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* 背景デコレーション */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-50 via-accent-400/5 to-transparent rounded-3xl -z-10" />
              <div className="absolute -top-3 -right-3 w-20 h-20 rounded-2xl bg-primary-100 -z-10" />
              <div className="absolute -bottom-3 -left-3 w-16 h-16 rounded-2xl bg-accent-400/10 -z-10" />

              {/* 画像 */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200 shadow-xl">
                <img
                  src="/profile.jpg"
                  alt={profile.displayName}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget
                    target.style.display = 'none'
                    const parent = target.parentElement
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-50 to-accent-400/10">
                          <div class="text-center">
                            <div class="text-5xl font-display font-bold text-primary-300">FO</div>
                            <div class="text-xs text-neutral-400 mt-2 tracking-wide">Fumiya Ohnishi</div>
                          </div>
                        </div>
                      `
                    }
                  }}
                />
              </div>

              {/* フローティングバッジ */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-card px-4 py-3 border border-neutral-100">
                <div className="text-xs text-neutral-500 mb-0.5">制作実績</div>
                <div className="font-display text-2xl font-bold text-neutral-900">10+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
