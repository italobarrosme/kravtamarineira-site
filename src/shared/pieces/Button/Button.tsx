import { cn } from '@/utils'
import { Icon } from '@iconify/react'
import { ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonProps = {
  label?: string
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
      className={cn(
        'flex items-center gap-4 whitespace-nowrap rounded bg-brand-primary px-4 py-2 font-bold text-white hover:bg-brand-secondary',
        className
      )}
      {...props}
    >
      {icon ? <Icon icon={icon} width={24} /> : null}
      {children}
    </button>
  )
}
