interface TagProps {
  label: string
  variant?: 'default' | 'accent' | 'muted'
  size?: 'sm' | 'md'
  className?: string
}

const variantClasses = {
  default: 'bg-primary-50 text-primary-700 border border-primary-100',
  accent: 'bg-accent-400/10 text-accent-600 border border-accent-400/20',
  muted: 'bg-neutral-100 text-neutral-600 border border-neutral-200',
}

const sizeClasses = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
}

export const Tag = ({ label, variant = 'default', size = 'sm', className = '' }: TagProps) => {
  return (
    <span
      className={`
        inline-flex items-center font-medium rounded-full
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `
        .replace(/\s+/g, ' ')
        .trim()}
    >
      {label}
    </span>
  )
}
