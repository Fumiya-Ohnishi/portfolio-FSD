export interface Work {
  id: string
  title: string
  slug: string
  category: string
  tone: string
  url: string
  summary: string
  description?: string
  concept?: string
  techStack?: string[]
  highlights?: string[]
  thumbnail?: string
  isFeatured?: boolean
  relatedSlugs?: string[]
  publishedAt?: string
}

export interface Profile {
  displayName: string
  nameEn: string
  title: string
  subtitle: string
  bio: string
  bioLong: string
  location: string
  profileImage: string
  career: CareerItem[]
  strengths: Strength[]
  techCategories: TechCategory[]
  values: string[]
}

export interface CareerItem {
  period: string
  title: string
  description: string
  type: 'work' | 'study' | 'milestone'
}

export interface Strength {
  icon: string
  title: string
  description: string
}

export interface TechCategory {
  label: string
  techs: string[]
}

export interface SocialLink {
  platform: string
  label: string
  url: string
  icon: string
  color: string
  bgColor: string
  description: string
}
