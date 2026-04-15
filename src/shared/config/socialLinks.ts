import type { SocialLink } from '@/shared/types'

export const socialLinks: SocialLink[] = [
  {
    platform: 'instagram',
    label: 'Instagram',
    url: 'https://www.instagram.com/fumiya_web_engineer/',
    icon: 'instagram',
    color: '#E1306C',
    bgColor: 'from-purple-500 via-pink-500 to-orange-400',
    description: '制作過程やデザインの裏話を発信しています',
  },
  {
    platform: 'threads',
    label: 'Threads',
    url: 'https://www.threads.com/@fumiya_web_engineer?xmt=AQF0rUsxKWDfe1hXsTN44wIK-wX7yZHg8ECPJxJgrpn50sM',
    icon: 'threads',
    color: '#000000',
    bgColor: 'from-neutral-800 to-neutral-600',
    description: 'Web制作・フロントエンドに関する発信をしています',
  },
  {
    platform: 'x',
    label: 'X (Twitter)',
    url: 'https://x.com/fumiya_ohnishi',
    icon: 'x',
    color: '#000000',
    bgColor: 'from-neutral-900 to-neutral-700',
    description: '技術的な気づきやWeb制作のTipsを発信しています',
  },
  {
    platform: 'github',
    label: 'GitHub',
    url: 'https://github.com/Fumiya-Ohnishi',
    icon: 'github',
    color: '#333333',
    bgColor: 'from-neutral-800 to-neutral-600',
    description: 'ポートフォリオや個人プロジェクトのコードを公開しています',
  },
]
