import type { Work } from '@/shared/types'

/**
 * 作品データ一覧
 * 新規作品はこの配列に追加するだけでトップ・一覧・詳細・関連作品に自動反映されます。
 * 将来的には外部JSON/CMSに置き換え可能な構造です。
 */
export const works: Work[] = [
  {
    id: '1',
    title: 'FlowPilot',
    slug: 'flowpilot',
    category: 'SaaS / Productivity',
    tone: 'Smart / Modern',
    url: 'https://flowpilot-fsd.vercel.app/',
    summary: 'AI予測分析を搭載した業務効率化SaaSのLP',
    description:
      'AIによる予測分析機能を前面に打ち出したSaaS系LPです。テクノロジーの先進性と使いやすさを両立した、知的でモダンなビジュアル設計を実現しました。',
    concept:
      '「テクノロジーをもっと身近に」というコンセプトのもと、データドリブンな意思決定を支援するSaaSの世界観を表現。グラデーションとアニメーションを駆使した動的なUIで、製品の可能性を視覚的に伝えています。',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    highlights: [
      'AIダッシュボードUIのプロトタイプ実装',
      'ダークモード・ライトモード切り替え対応',
      'パフォーマンスを意識した画像最適化',
      'アニメーションの丁寧な実装でUXを向上',
    ],
    isFeatured: true,
    relatedSlugs: ['maison-de-lumiere', 'form-architects'],
    publishedAt: '2024-08',
  },
  {
    id: '2',
    title: 'Maison de Lumière',
    slug: 'maison-de-lumiere',
    category: 'Wedding',
    tone: 'Elegant / Romantic',
    url: 'https://wedding-site-pink-seven.vercel.app/',
    summary: '光と静寂をテーマにした上質なウェディング会場LP',
    description:
      '光と静寂をコンセプトにした上質なウェディング会場のLPです。洗練されたタイポグラフィと余白設計で、非日常的な特別感を演出しました。',
    concept:
      '結婚という人生最高の瞬間を飾るにふさわしい、格調ある美しさを追求。白とゴールドを基調としたカラーパレットと、Playfair Displayを活用した繊細なタイポグラフィで上質感を表現しています。',
    techStack: ['React', 'TypeScript', 'CSS Modules', 'GSAP'],
    highlights: [
      '余白を広く取ったラグジュアリーレイアウト',
      'スクロール連動のエレガントなアニメーション',
      'フォトギャラリーの没入感ある表示設計',
      'モバイルでも崩れない細部のUI調整',
    ],
    isFeatured: true,
    relatedSlugs: ['seren-spa', 'lumiere-clinic'],
    publishedAt: '2024-07',
  },
  {
    id: '3',
    title: 'FORM ARCHITECTS',
    slug: 'form-architects',
    category: 'Architecture',
    tone: 'Minimal / Luxury',
    url: 'https://architectural-portfolio-seven.vercel.app/',
    summary: '建築設計事務所の世界観を表現したポートフォリオサイト',
    description:
      '建築設計事務所のポートフォリオサイトです。建築の本質である「形」「空間」「素材」をWebデザインで表現し、事務所のフィロソフィーを視覚的に伝えています。',
    concept:
      'ミニマルを極めることで生まれる「静けさの中の強さ」を表現。建築写真を最大限に活かすための余白設計と、モノクロームを基調としたカラーパレットで、プロフェッショナルな世界観を構築しました。',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    highlights: [
      '全画面フォトギャラリーのインタラクション実装',
      'スクロール演出による建築空間の表現',
      'タイポグラフィを核にした情報設計',
      '超高解像度画像の最適化と表示速度の両立',
    ],
    isFeatured: true,
    relatedSlugs: ['flowpilot', 'azure-resort'],
    publishedAt: '2024-09',
  },
  {
    id: '4',
    title: 'AZURE RESORT & SPA',
    slug: 'azure-resort',
    category: 'Resort / Hotel',
    tone: 'Premium / Escape',
    url: 'https://azure-resort.vercel.app/',
    summary: '沖縄の高級リゾートホテルを想定した宿泊LP',
    description:
      '沖縄の高級リゾートを想定した宿泊LPです。海と空の青さ、開放的な自然を感じさせるビジュアルで、日常からの解放という体験価値を伝えています。',
    concept:
      '「非日常へのエスケープ」をテーマに、リゾートホテルの雰囲気をWebで体験できる設計を目指しました。オーシャンブルーのカラーパレットと全画面ビデオ背景で没入感を演出しています。',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Intersection Observer API'],
    highlights: [
      '全画面ビデオ背景の最適な実装',
      'パラックス効果による奥行き演出',
      '客室・プランの分かりやすい比較レイアウト',
      '予約CTAの戦略的配置と導線設計',
    ],
    isFeatured: false,
    relatedSlugs: ['maison-de-lumiere', 'seren-spa', 'form-architects'],
    publishedAt: '2024-06',
  },
  {
    id: '5',
    title: '山田・中村法律事務所',
    slug: 'yamada-nakamura-law',
    category: 'Law Firm',
    tone: 'Trust / Formal',
    url: 'https://law-firm-lp-seven.vercel.app/',
    summary: '実績と安心感を伝える法律事務所LP',
    description:
      '実績と信頼感を最優先に設計した法律事務所のLPです。堅固でありながら親しみやすさも兼ね備えた、バランスのとれたデザインを実現しました。',
    concept:
      '法律という専門領域への心理的障壁を下げながら、プロフェッショナリズムを伝えることが課題でした。ネイビーを基調としたカラーパレットと明確な情報構造で、信頼と安心感を両立しています。',
    techStack: ['HTML/CSS', 'JavaScript', 'jQuery', 'PHP'],
    highlights: [
      '弁護士プロフィールの信頼感ある表示設計',
      'よくある相談事例のQ&Aアコーディオン実装',
      'お問い合わせフォームの最適なUX設計',
      'アクセシビリティを意識したマークアップ',
    ],
    isFeatured: false,
    relatedSlugs: ['flowpilot', 'lumiere-clinic'],
    publishedAt: '2024-05',
  },
  {
    id: '6',
    title: 'CodeKids',
    slug: 'codekids',
    category: 'Kids Programming School',
    tone: 'Friendly / Bright',
    url: 'https://kids-code-school.vercel.app/',
    summary: '子ども向けプログラミングスクールの募集LP',
    description:
      '子ども向けプログラミングスクールの生徒募集LPです。明るく活発な雰囲気を大切にしながら、保護者の安心感も同時に伝えることを意識して設計しました。',
    concept:
      '子どもたちのワクワクと、親御さんの安心を同時に実現するデザインを目指しました。カラフルでエネルギッシュなビジュアルと、信頼感のある情報設計を両立しています。',
    techStack: ['Vue.js', 'TypeScript', 'CSS Modules', 'Anime.js'],
    highlights: [
      '保護者・子ども双方を意識した二段階の情報設計',
      'キャラクターイラストを活かしたUI設計',
      '無料体験申し込みフォームのUX最適化',
      'カリキュラム表の分かりやすい視覚化',
    ],
    isFeatured: false,
    relatedSlugs: ['le-pain-doux', 'flowpilot'],
    publishedAt: '2024-04',
  },
  {
    id: '7',
    title: 'Seren',
    slug: 'seren-spa',
    category: 'Spa / Salon',
    tone: 'Calm / Healing',
    url: 'https://spa-salon-six.vercel.app/',
    summary: '静けさと癒しを感じるリラクゼーションサロンLP',
    description:
      '静けさと癒しをコンセプトにしたリラクゼーションサロンのLPです。訪問したその瞬間からリラックスできるような、穏やかで心地よい体験を設計しました。',
    concept:
      'サロンに足を踏み入れた瞬間の静けさと温もりをWebで再現することを目指しました。アースカラーを基調としたパレットと、ゆっくりとしたアニメーションで、日常の喧騒を忘れられる空間を作っています。',
    techStack: ['React', 'TypeScript', 'Styled Components', 'GSAP'],
    highlights: [
      'アースカラーと自然素材テクスチャの活用',
      'メニュー・料金表の洗練された表示設計',
      'スタッフ紹介のパーソナルな表現',
      '予約システムとの連携を意識した導線設計',
    ],
    isFeatured: false,
    relatedSlugs: ['maison-de-lumiere', 'lumiel', 'lumiere-clinic'],
    publishedAt: '2024-10',
  },
  {
    id: '8',
    title: 'LUMIEL',
    slug: 'lumiel',
    category: 'Skincare',
    tone: 'Clean / Premium',
    url: 'https://lumiel-skincare.vercel.app/',
    summary: '科学と自然をテーマにしたスキンケアブランドLP',
    description:
      '科学と自然の融合をコンセプトにしたスキンケアブランドのLPです。製品の品質と哲学を視覚的に表現し、ブランドの世界観への共感を生む設計を実現しました。',
    concept:
      '「科学が、美しさを解き明かす」というブランドフィロソフィーを基に、クリーンで知的な世界観を構築。ホワイトスペースを贅沢に使い、製品そのものを主役にしたレイアウトを採用しました。',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Three.js'],
    highlights: [
      '製品成分の視覚的なインフォグラフィック実装',
      'スキンタイプ別の製品提案インタラクション',
      '定期購入フローのUX最適化',
      'ブランドストーリーのスクロール演出',
    ],
    isFeatured: true,
    relatedSlugs: ['lumiere-clinic', 'seren-spa', 'maison-de-lumiere'],
    publishedAt: '2024-11',
  },
  {
    id: '9',
    title: 'LUMIÈRE CLINIC',
    slug: 'lumiere-clinic',
    category: 'Beauty Clinic',
    tone: 'Elegant / Medical Luxury',
    url: 'https://lumiere-clinic-beta.vercel.app/',
    summary: '上品さと安心感を両立した高級美容クリニックLP',
    description:
      '高級美容クリニックのLPです。美の追求という感性的な価値と、医療機関としての信頼性・安心感を同時に表現する難しいバランスに挑戦しました。',
    concept:
      '「医療の安心、美の喜び」を体現するデザインを追求しました。深みのあるネイビーとゴールドのコンビネーションで、医療×ラグジュアリーという独自のポジションを確立しています。',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    highlights: [
      'ドクタープロフィールの信頼感ある設計',
      'ビフォーアフター写真のギャラリー実装',
      '施術メニューの分かりやすい料金表設計',
      'LINEカウンセリング予約との自然な導線',
    ],
    isFeatured: true,
    relatedSlugs: ['lumiel', 'seren-spa', 'maison-de-lumiere'],
    publishedAt: '2024-12',
  },
  {
    id: '10',
    title: 'Le Pain Doux',
    slug: 'le-pain-doux',
    category: 'Bakery / Cafe',
    tone: 'Warm / Friendly',
    url: 'https://bakery-site-theta.vercel.app/',
    summary: '焼きたての温かさと居心地の良さを表現したベーカリーカフェLP',
    description:
      'ベーカリーカフェのLPです。焼きたてパンの温もりと、お店に入った瞬間の心地よさをWebで表現しました。訪問者が実際に足を運びたくなる設計を目指しました。',
    concept:
      '焼きたてパンの香りが漂ってくるような、温かみのあるデザインを目指しました。クラフト感のあるテクスチャとウォームトーンのカラーパレットで、手作りの温かさを表現しています。',
    techStack: ['HTML/CSS', 'JavaScript', 'WordPress', 'PHP'],
    highlights: [
      'クラフト感を演出するテクスチャとカラー設計',
      'メニュー・商品ページの食欲をそそる写真レイアウト',
      'Google マップ連携と店舗情報の分かりやすい設計',
      'モバイルユーザーを意識した電話・マップへのワンタップ動線',
    ],
    isFeatured: false,
    relatedSlugs: ['codekids', 'seren-spa'],
    publishedAt: '2024-03',
  },
]

/**
 * スラッグから作品を取得
 */
export const getWorkBySlug = (slug: string): Work | undefined =>
  works.find((w) => w.slug === slug)

/**
 * 関連作品を取得（最大3件）
 */
export const getRelatedWorks = (work: Work): Work[] => {
  if (work.relatedSlugs && work.relatedSlugs.length > 0) {
    return work.relatedSlugs
      .map((slug) => works.find((w) => w.slug === slug))
      .filter((w): w is Work => w !== undefined)
      .slice(0, 3)
  }
  return works
    .filter((w) => w.slug !== work.slug && w.category === work.category)
    .slice(0, 3)
}

/**
 * 注目作品を取得（isFeatured === true）
 */
export const getFeaturedWorks = (): Work[] => works.filter((w) => w.isFeatured)

/**
 * カテゴリ一覧を取得
 */
export const getCategories = (): string[] => {
  const cats = works.map((w) => w.category)
  return ['ALL', ...Array.from(new Set(cats))]
}
