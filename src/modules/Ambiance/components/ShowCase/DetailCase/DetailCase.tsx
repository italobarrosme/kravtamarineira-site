'use client'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/components/Dialog/Dialog'
import { cn } from '@/utils'
import Image from 'next/image'
import { ReactNode } from 'react'

type Image = {
  link: string
  alt: string
}

type DetailCaseProps = {
  image: Image
  children?: ReactNode
  className?: string
}

export const DetailCase = ({ children, image, className }: DetailCaseProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild className="h-full w-full">
        {children}
      </DialogTrigger>
      <DialogContent className={cn('bg-brand-light w-full', className)}>
        <div className={cn('relative h-96 cursor-pointer')}>
          <Image
            src={image.link}
            alt={image.alt}
            className="object-fill"
            fill
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
