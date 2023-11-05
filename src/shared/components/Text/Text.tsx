'use client'

import { HTMLAttributes, ReactNode } from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/utils'

const textStyle = cva([], {
  variants: {
    variant: {
      h1: 'my-2 text-7xl font-bold text-brand-primary',
      h2: 'my-2 text-6xl font-normal text-brand-primary',
      h3: 'my-2 text-5xl font-normal text-brand-primary',
      h4: 'my-2 text-4xl font-normal text-brand-primary',
      h5: 'my-2 text-3xl font-normal text-brand-primary',
      h6: 'my-2 text-xl font-normal text-brand-primary',
      p: 'my-2 break-normal text-sm font-normal text-brand-primary',
      small: 'text-xs font-normal text-brand-primary',
    },
  },
  defaultVariants: {
    variant: 'h1',
  },
})

type VariantType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'small'

type SelectedTags = keyof JSX.IntrinsicElements extends infer K
  ? K extends VariantType
    ? K
    : never
  : never

type TextProps = {
  children: ReactNode
  variant?: SelectedTags
  className?: string
} & HTMLAttributes<HTMLElement>

export const Text = ({
  children,
  variant = 'h1',
  className,
  ...props
}: TextProps) => {
  const Tag = variant

  return (
    <Tag className={cn([textStyle({ variant }), className])} {...props}>
      {children}
    </Tag>
  )
}
