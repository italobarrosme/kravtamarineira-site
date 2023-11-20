'use client'

import { HTMLAttributes, ReactNode } from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/utils'

const textStyle = cva([], {
  variants: {
    variant: {
      h1: 'my-2 text-7xl font-bold',
      h2: 'my-2 text-6xl font-semibold',
      h3: 'my-2 text-5xl font-semibold',
      h4: 'my-2 text-4xl font-semibold',
      h5: 'my-2 text-3xl font-semibold',
      h6: 'my-2 text-xl font-semibold',
      p: 'break-normal text-sm font-normal',
      small: 'text-xs',
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
  variant = 'p',
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
