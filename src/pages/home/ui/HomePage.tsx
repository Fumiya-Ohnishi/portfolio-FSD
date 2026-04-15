import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Hero } from '@/widgets/hero'
import { FeaturedWorks } from '@/widgets/featured-works'
import { StrengthsSection } from '@/widgets/strengths-section'
import { ProfileSummary } from '@/widgets/profile-summary'
import { Section, SectionHeader } from '@/shared/ui/Section'
import { socialLinks } from '@/shared/config/socialLinks'
import { useMeta } from '@/shared/lib/useMeta'

const ContactCTA = () => (
  <Section className="bg-gradient-to-br from-neutral-950 via-[#0d1f3c] to-[#1a0a3d] text-white">
    <div className="text-center max-w-2xl mx-auto">
      <p className="text-primary-400 text-sm font-semibold tracking-widest uppercase mb-4">
        Contact
      </p>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5">
        お気軽にご連絡ください
      </h2>
      <p className="text-neutral-300/80 text-base md:text-lg leading-relaxed mb-8">
        ご相談・お見積もりはSNSからお気軽にどうぞ。
        <br />
        制作実績や費用感など、お気軽にお問い合わせください。
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {socialLinks.slice(0, 3).map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white rounded-xl text-sm font-medium transition-all duration-200"
          >
            {link.label}
          </a>
        ))}
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl text-sm font-medium transition-all duration-200"
        >
          すべてのSNSを見る
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  </Section>
)

export const HomePage = () => {
  useMeta({
    title: 'Frontend Engineer / Web Creator',
    description:
      'Fumiya Ohnishi のポートフォリオサイト。React・TypeScript・Viteを中心に、業種に合わせたWebサイト制作に取り組んでいます。',
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <Hero />
      <FeaturedWorks />
      <StrengthsSection />
      <ProfileSummary />
      <ContactCTA />
    </main>
  )
}
