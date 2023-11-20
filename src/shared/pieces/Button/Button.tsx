import { cn } from '@/utils'
import { Icon } from '@iconify/react'
import { cva } from 'class-variance-authority'
import { ButtonHTMLAttributes, ReactNode } from 'react'

const buttonStyle = cva(
  [
    'flex items-center justify-center gap-4 whitespace-nowrap rounded bg-brand-primary px-4 py-2 font-bold text-white hover:bg-brand-secondary',
  ],
  {
    variants: {
      variant: {
        primary: 'bg-brand-primary hover:bg-brand-secondary',
        secondary: 'bg-brand-secondary hover:bg-brand-accent',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
)

type VariantType = 'primary' | 'secondary'

export type ButtonProps = {
  variant?: VariantType
  className?: string
  icon?: string
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
  className,
  type,
  icon = '',
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={cn(buttonStyle({ variant: props.variant }), className)}
      {...props}
    >
      {icon ? <Icon icon={icon} width={24} /> : null}
      {children}
    </button>
  )
}
