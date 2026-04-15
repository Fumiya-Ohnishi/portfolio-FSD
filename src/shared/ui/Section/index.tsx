interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  tight?: boolean
}

export const Section = ({ children, className = '', id, tight = false }: SectionProps) => {
  return (
    <section
      id={id}
      className={`${tight ? 'py-12 md:py-16' : 'py-16 md:py-24 lg:py-32'} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}: SectionHeaderProps) => {
  return (
    <div
      className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : ''} ${className}`}
    >
      {eyebrow && (
        <p className="text-primary-600 text-sm font-semibold tracking-widest uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-neutral-500 text-base md:text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
