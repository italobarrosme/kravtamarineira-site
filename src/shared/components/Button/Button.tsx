'use client'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/utils'
import { Loading } from '../Loading'
import { ElementType, ComponentPropsWithoutRef } from 'react'

const buttonStyle = cva(
  [
    'grid h-10 place-items-center truncate rounded-md text-base font-bold transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary disabled:pointer-events-none disabled:opacity-30 sm:min-w-[220px]',
  ],
  {
    variants: {
      variant: {
        primary:
          'bg-brand-primary text-white hover:bg-brand-secondary hover:text-brand-light active:bg-brand-secondary',
        secondary:
          'bg-brand-secondary text-white hover:bg-brand-secondary active:bg-brand-primary',
        neutral:
          'bg-white text-brand-primary hover:bg-brand-secondary hover:text-brand-light active:bg-brand-light active:text-brand-accent',
        outline:
          'border border-white bg-transparent text-white hover:bg-brand-secondary active:bg-brand-soft',
        link: 'text-brand-accent hover:text-brand-accent-hover hover:underline active:text-brand-accent-hover',
      },
      size: {
        base: 'w-[200px]',
        full: 'w-full',
        fit: 'w-fit',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'base',
    },
  }
)

export type PolymorphicProps<E extends ElementType, P> = P & {
  as?: E
} & Omit<ComponentPropsWithoutRef<E>, 'as'>

export type ButtonStyleProps = VariantProps<typeof buttonStyle>

export type ButtonBaseProps = {
  isLoading?: boolean
} & ButtonStyleProps

export type ButtonProps<E extends ElementType> = PolymorphicProps<
  E,
  ButtonBaseProps
>

export const Button = <E extends ElementType = 'button'>({
  isLoading,
  variant,
  size = 'base',
  className,
  children,
  as,
  ...props
}: ButtonProps<E>) => {
  const Tag = as || 'button'

  return (
    <Tag
      className={cn(
        buttonStyle({ variant, size }),
        {
          'pointer-events-none': isLoading,
        },
        className
      )}
      {...props}
    >
      {isLoading ? <Loading /> : children}
    </Tag>
  )
}
