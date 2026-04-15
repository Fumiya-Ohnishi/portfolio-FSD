import { type ButtonHTMLAttributes, forwardRef } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  href?: string
  external?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 shadow-sm hover:shadow-md',
  secondary:
    'bg-neutral-900 text-white hover:bg-neutral-700 active:bg-neutral-800 shadow-sm hover:shadow-md',
  ghost: 'bg-transparent text-neutral-700 hover:bg-neutral-100 active:bg-neutral-200',
  outline:
    'bg-transparent border border-neutral-300 text-neutral-700 hover:border-neutral-500 hover:bg-neutral-50',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg gap-1.5',
  md: 'px-6 py-3 text-base rounded-xl gap-2',
  lg: 'px-8 py-4 text-lg rounded-xl gap-2.5',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      href,
      external,
      icon,
      iconPosition = 'left',
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses = `
      inline-flex items-center justify-center font-medium
      transition-all duration-200 ease-smooth
      focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed
      ${variantClasses[variant]}
      ${sizeClasses[size]}
      ${className}
    `
      .replace(/\s+/g, ' ')
      .trim()

    const content = (
      <>
        {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
        {children}
        {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
      </>
    )

    if (href) {
      if (external) {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
            {content}
          </a>
        )
      }
      return (
        <Link to={href} className={baseClasses}>
          {content}
        </Link>
      )
    }

    return (
      <button ref={ref} className={baseClasses} {...props}>
        {content}
      </button>
    )
  }
)

Button.displayName = 'Button'
