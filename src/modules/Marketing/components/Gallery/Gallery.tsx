'use client'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import { useSliderGallery } from './hooks/useSliderGallery'
import { cn } from '@/utils'
import { ReactNode } from 'react'

type GalleryProps = {
  images: string[]
  className?: string
  children?: ReactNode
}

export const Gallery = ({ images, className, children }: GalleryProps) => {
  const { nextSlide, prevSlide, currentIndex } = useSliderGallery(images)

  return (
    <div className={cn('relative w-full p-4', className)}>
      {images.length > 0 ? (
        images.map((image, index) => (
          <div
            key={index}
            className={`${
              index === currentIndex ? 'block' : 'hidden'
            } min-h-screen-hero w-full transition-opacity duration-300`}
          >
            <Image
              src={
                process.env.NEXT_PUBLIC_BASE_URL_UPLOADS + image ||
                'https://via.placeholder.com/1920x1080'
              }
              alt={`Slide ${index + 1}`}
              fill={true}
            />
          </div>
        ))
      ) : (
        <div
          className={`min-h-screen-hero w-full transition-opacity duration-300`}
        >
          <Image
            src={'https://via.placeholder.com/1920x1080'}
            alt={`Slide default`}
            className="object-cover"
            fill={true}
          />
        </div>
      )}
      {images.length > 1 && (
        <>
          <button
            className="absolute bottom-1/2 left-4 -translate-y-1/2 rounded-full bg-brand-accent p-2 text-white"
            onClick={prevSlide}
          >
            <Icon icon="akar-icons:chevron-left" width={12} />
          </button>
          <button
            className="absolute bottom-1/2 right-4  -translate-y-1/2 rounded-full bg-brand-accent p-2 text-white"
            onClick={nextSlide}
          >
            <Icon icon="akar-icons:chevron-right" width={12} />
          </button>
        </>
      )}

      <div className="absolute bottom-8 flex w-full justify-center rounded-full text-white">
        {images.length > 1
          ? images.map((image, index) => (
              <span
                key={index}
                className={`${
                  index === currentIndex ? 'bg-brand-accent' : 'bg-brand-light'
                } mx-1 flex h-2 w-2 flex-row rounded-full`}
              ></span>
            ))
          : null}
      </div>
      {children}
    </div>
  )
}
