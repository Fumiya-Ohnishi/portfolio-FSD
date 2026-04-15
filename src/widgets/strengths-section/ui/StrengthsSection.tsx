import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Section, SectionHeader } from '@/shared/ui/Section'
import { profile } from '@/shared/config/profile'
import { useScrollAnimation } from '@/shared/lib/useScrollAnimation'

export const StrengthsSection = () => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <Section className="bg-neutral-50/50">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <SectionHeader
          eyebrow="What I Do"
          title="得意なこと"
          description="業種・ターゲットに合わせた世界観づくりから、保守しやすい設計まで。"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {profile.strengths.map((strength, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-neutral-200/80 p-7 shadow-card"
              style={{
                transitionDelay: `${i * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
              }}
            >
              <div className="text-3xl mb-4">{strength.icon}</div>
              <h3 className="font-semibold text-lg text-neutral-900 mb-3">
                {strength.title}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {strength.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/strengths"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium group"
          >
            詳しいサービス内容を見る
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </Section>
  )
}
