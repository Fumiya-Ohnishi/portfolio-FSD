import { SocialCard } from '@/entities/social-link'
import { socialLinks } from '@/shared/config/socialLinks'

export const SocialLinks = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {socialLinks.map((link) => (
        <SocialCard key={link.platform} link={link} />
      ))}
    </div>
  )
}
