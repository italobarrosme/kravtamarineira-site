'use client'
import {
  Dialog,
  DialogContent,
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
        <div className={cn('relative h-96 rounded-lg cursor-pointer')}>
          <Image
            src={process.env.NEXT_PUBLIC_BASE_URL_UPLOADS + image.link}
            alt={image.alt}
            className="rounded-lg object-fill"
            fill
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
