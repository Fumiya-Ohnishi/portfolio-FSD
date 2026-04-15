import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { Section, SectionHeader } from '@/shared/ui/Section'
import { useMeta } from '@/shared/lib/useMeta'

interface ServiceItem {
  icon: string
  title: string
  description: string
  deliverables: string[]
}

const services: ServiceItem[] = [
  {
    icon: '🎨',
    title: '業種・ターゲットに合わせた雰囲気づくり',
    description:
      '高級感のある表現から、親しみやすいポップなテイストまで幅広く対応。業種やターゲット層を丁寧にヒアリングし、最適なビジュアル・トーンを設計します。',
    deliverables: [
      'ターゲット分析とデザイン方向性の提案',
      'カラーパレット・フォント選定',
      'ビジュアルコンセプトの設計',
      '業種別に最適化されたレイアウト',
    ],
  },
  {
    icon: '📄',
    title: 'LP・ポートフォリオサイト制作',
    description:
      '情報整理・導線設計を重視したランディングページや、制作実績を魅力的に見せるポートフォリオサイトを制作します。成果につながることを意識した設計を心がけています。',
    deliverables: [
      '情報設計・ワイヤーフレーム作成',
      'レスポンシブ対応',
      'CTAの戦略的配置',
      'パフォーマンス最適化',
    ],
  },
  {
    icon: '⚛️',
    title: 'React / TypeScript 実装',
    description:
      'React・TypeScript・Viteを中心に、モダンな技術スタックで高品質なフロントエンドを実装。Feature-Sliced Designなどのアーキテクチャを採用し、保守しやすいコードを書きます。',
    deliverables: [
      'React + TypeScript + Vite 構成',
      'Feature-Sliced Design (FSD) 採用',
      'Tailwind CSS によるスタイリング',
      'コンポーネント設計・型安全な実装',
    ],
  },
  {
    icon: '🏗️',
    title: '設計・保守しやすいコードベース',
    description:
      '長期的に管理しやすいコード設計を意識しています。新しい機能追加・デザイン変更のたびに全体を作り直す必要がないよう、適切なコンポーネント分割とデータ管理を行います。',
    deliverables: [
      'コンポーネント設計・再利用性の確保',
      'データ駆動で管理しやすい構成',
      'コード品質・型安全性の確保',
      '将来的な拡張を見据えた設計',
    ],
  },
  {
    icon: '📱',
    title: 'レスポンシブ・UI/UX 設計',
    description:
      'スマートフォンでの閲覧が主流の現代に合わせ、モバイルファーストで設計。PC・タブレット・スマートフォン、どのデバイスでも快適に閲覧できるUIを実現します。',
    deliverables: [
      'モバイルファーストデザイン',
      'タッチ操作に最適化',
      'アクセシビリティへの配慮',
      'クロスブラウザ対応',
    ],
  },
  {
    icon: '✨',
    title: '丁寧な改善・ブラッシュアップ',
    description:
      '初回納品で終わりではなく、フィードバックをもとにした着実な改善を大切にしています。「なんか違う」という感覚的なフィードバックにも丁寧に向き合い、納得のいく仕上がりを目指します。',
    deliverables: [
      '修正対応・フィードバック反映',
      'デザイン調整・テキスト変更',
      'パフォーマンス改善',
      '公開後のフォローアップ',
    ],
  },
]

const WorkExamples = () => {
  const examples = [
    { tone: 'SaaS / Tech', description: 'AI系SaaS、ツール紹介LP、企業サイト' },
    { tone: 'Luxury / Premium', description: 'ウェディング、高級リゾート、美容クリニック' },
    { tone: 'Minimal / Design', description: '建築・デザイン事務所、クリエイターポートフォリオ' },
    { tone: 'Medical / Trust', description: '法律事務所、クリニック、士業' },
    { tone: 'Healing / Calm', description: 'スパ・サロン、ヨガスタジオ、ウェルネス' },
    { tone: 'Warm / Friendly', description: 'カフェ・ベーカリー、子ども向けスクール' },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {examples.map((ex, i) => (
        <div
          key={i}
          className="bg-white rounded-xl p-5 border border-neutral-200 hover:border-primary-300 transition-colors"
        >
          <div className="font-semibold text-neutral-900 text-sm mb-1">{ex.tone}</div>
          <div className="text-neutral-500 text-xs leading-relaxed">{ex.description}</div>
        </div>
      ))}
    </div>
  )
}

export const StrengthsPage = () => {
  useMeta({
    title: 'Strengths',
    description:
      '業種・ターゲットに合わせた雰囲気づくり、React/TypeScript実装、LP・ポートフォリオ制作など、Fumiya Ohnishi の得意なこと・サービス内容をご紹介します。',
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="pt-20">
      {/* ヘッダー */}
      <div className="bg-gradient-to-br from-neutral-950 via-[#0d1f3c] to-[#1a1040] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <p className="text-primary-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Strengths / Services
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            得意なこと
          </h1>
          <p className="text-neutral-300/80 text-base md:text-lg max-w-xl leading-relaxed">
            業種やターゲットを理解し、見た目だけでなく目的につながるWebサイトを制作します。
          </p>
        </div>
      </div>

      {/* サービス一覧 */}
      <Section>
        <SectionHeader
          eyebrow="Services"
          title="サービス内容"
          description="初期ヒアリングから公開後のフォローまで、一貫してサポートします。"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-neutral-200/80 p-7 shadow-card"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="font-semibold text-xl text-neutral-900 mb-3">
                {service.title}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-5">
                {service.description}
              </p>
              <div className="border-t border-neutral-100 pt-4 space-y-2">
                {service.deliverables.map((d, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <Check size={14} className="text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-neutral-600">{d}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 対応できる雰囲気・業種 */}
      <Section className="bg-neutral-50">
        <SectionHeader
          eyebrow="Versatility"
          title="対応できるテイスト・業種"
          description="高級感から親しみやすさまで、幅広い世界観づくりに対応しています。"
        />
        <WorkExamples />
      </Section>

      {/* 設計・実装の考え方 */}
      <Section className="bg-neutral-950 text-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Approach"
            title="設計・実装の考え方"
            className="[&>h2]:text-white [&>p]:text-white/60"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: '目的から逆算する',
                body: 'デザインの美しさよりも「何を達成するか」を先に考えます。誰がどんな状態でそのページを見るかを想定し、最適な導線・情報設計を行います。',
              },
              {
                step: '02',
                title: '業種の文脈を理解する',
                body: '法律事務所とベーカリーでは、目指すべき信頼感の種類が異なります。各業種の慣習・競合・ターゲット心理を理解した上でデザインを作ります。',
              },
              {
                step: '03',
                title: '保守しやすいコードを書く',
                body: '「動けばいい」ではなく、将来修正しやすいコードを意識します。コンポーネント分割・型安全・データ駆動設計を通じて、長く使えるサイトを作ります。',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="text-primary-400 font-display text-3xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-white font-semibold mb-3">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-neutral-900 mb-4">
            お気軽にご相談ください
          </h2>
          <p className="text-neutral-500 text-base mb-8 leading-relaxed">
            制作のご相談・お見積もりはSNSから受け付けています。
            <br />
            まずはお気軽にメッセージをお送りください。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-neutral-900 text-white rounded-xl font-semibold hover:bg-neutral-700 transition-all duration-200 group"
            >
              お問い合わせ
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              to="/works"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-neutral-700 rounded-xl font-semibold border border-neutral-200 hover:border-neutral-400 hover:bg-neutral-50 transition-all duration-200"
            >
              制作実績を見る
            </Link>
          </div>
        </div>
      </Section>
    </main>
  )
}
