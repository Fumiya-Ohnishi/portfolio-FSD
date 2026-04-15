interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const paddingClasses = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export const Card = ({
  children,
  className = '',
  hover = false,
  padding = 'md',
}: CardProps) => {
  return (
    <div
      className={`
        bg-white rounded-2xl border border-neutral-200/80 shadow-card
        ${hover ? 'transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 cursor-pointer' : ''}
        ${paddingClasses[padding]}
        ${className}
      `
        .replace(/\s+/g, ' ')
        .trim()}
    >
      {children}
    </div>
  )
}
