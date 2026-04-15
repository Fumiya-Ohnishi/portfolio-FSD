import type { Profile } from '@/shared/types'

export const profile: Profile = {
  displayName: '大西 史弥',
  nameEn: 'Fumiya Ohnishi',
  title: 'Frontend Engineer / Web Creator',
  subtitle: '業種に合わせた世界観を、コードで形にする',
  bio: '未経験からWeb制作を学び、React・TypeScript・Viteを中心に業種やターゲットに合わせたWebサイト制作に取り組んでいます。',
  bioLong: `未経験からWeb制作を学び、スクールでの学習、模写、案件応募を通じて実装力を磨いてきました。現在は、React・TypeScript・Viteを中心に、業種やターゲットに合わせたWebサイト制作に取り組んでいます。

特に、情報整理、雰囲気づくり、導線を意識したLPやポートフォリオ系の制作を得意としています。高級感のある表現から親しみやすいテイストまで幅広く対応し、見た目だけでなく「伝わること」「目的につながること」を意識して制作しています。丁寧なヒアリングと着実な改善を大切にしながら、価値の伝わるサイトづくりを心がけています。`,
  location: '愛媛県',
  profileImage: '/src/shared/assets/profile.jpg',
  career: [
    {
      period: '〜2019',
      title: '自動車販売会社 / 営業職',
      description:
        '5年間にわたり自動車販売の営業担当として勤務。顧客との信頼関係構築や、ヒアリング・提案スキルを磨きました。',
      type: 'work',
    },
    {
      period: '2020',
      title: 'Web業界への転身を決意',
      description:
        'コロナ禍での結婚・出産をきっかけに、家族との時間を大切にできる働き方を模索。Web業界への転身を決意しました。',
      type: 'milestone',
    },
    {
      period: '2020〜2021',
      title: 'Webスクール受講 / 独学',
      description:
        '半年間のスクール通学でHTML/CSS・JavaScript・PHPの基礎を習得。模写を中心に約10ページの制作物を蓄積しました。',
      type: 'study',
    },
    {
      period: '2021',
      title: 'フリーランス案件獲得',
      description:
        'クラウドソーシングで案件2件、知人紹介で1件を獲得。実案件を通じて実践力を磨きました。',
      type: 'work',
    },
    {
      period: '2022〜現在',
      title: 'Web業界に転職・フロントエンド開発',
      description:
        'Web業界への転職を実現。React・TypeScriptを中心にフロントエンド開発に携わり、現在に至ります。',
      type: 'work',
    },
  ],
  strengths: [
    {
      icon: '🎨',
      title: '業種・テイストを問わない表現力',
      description:
        '高級感のある表現から親しみやすいポップな雰囲気まで、クライアントのターゲットや業種に合わせた雰囲気づくりが得意です。',
    },
    {
      icon: '🏗️',
      title: '設計を意識した実装',
      description:
        'FSDなど保守しやすいアーキテクチャを採用し、長期的に管理しやすいコードベースを心がけています。',
    },
    {
      icon: '📐',
      title: '情報設計・導線設計',
      description:
        '見た目だけでなく「伝わること」「目的につながること」を意識した情報整理とCTA設計を重視しています。',
    },
    {
      icon: '💬',
      title: '丁寧なヒアリングと改善姿勢',
      description:
        '元営業職の経験を活かし、クライアントのニーズを引き出す丁寧なヒアリングと、フィードバックをもとにした着実な改善を大切にしています。',
    },
  ],
  techCategories: [
    {
      label: 'Frontend Framework',
      techs: ['React', 'Vue.js', 'Angular', 'Next.js'],
    },
    {
      label: 'Language',
      techs: ['TypeScript', 'JavaScript', 'HTML/CSS', 'SCSS', 'PHP'],
    },
    {
      label: 'Styling',
      techs: ['Tailwind CSS', 'Chakra UI', 'Styled Components', 'CSS Modules'],
    },
    {
      label: 'Build Tool / Template',
      techs: ['Vite', 'EJS', 'jQuery'],
    },
    {
      label: 'Backend / API',
      techs: ['GraphQL', 'Hasura', 'Prisma', 'Firebase', 'GAS'],
    },
    {
      label: 'Infrastructure / Cloud',
      techs: ['AWS', 'Firebase Hosting', 'Vercel'],
    },
    {
      label: 'Web3',
      techs: ['ethers.js'],
    },
    {
      label: 'Design Tool',
      techs: ['Figma', 'Adobe XD', 'Illustrator', 'Photoshop'],
    },
    {
      label: 'Dev Tool / Other',
      techs: ['GitHub', 'Mockoon', 'FSD'],
    },
  ],
  values: [
    '「伝わること」「目的につながること」を最優先に考えること',
    '丁寧なヒアリングで本質的なニーズを引き出すこと',
    '保守しやすい設計と構成への意識',
    'フィードバックをもとにした着実なブラッシュアップ',
    '見た目の美しさと機能性の両立',
  ],
}
