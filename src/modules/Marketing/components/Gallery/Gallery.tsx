'use client'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

type GalleryProps = {
  images: string[]
}

export const Gallery = ({ images }: GalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [images])

  return (
    <div className="relative mb-4 w-full">
      {images.map((image, index) => (
        <div
          key={index}
          className={`${
            index === currentIndex ? 'block' : 'hidden'
          } min-h-screen-hero w-full transition-opacity duration-300`}
        >
          <Image
            src={image}
            alt={`Slide ${index + 1}`}
            layout="fill"
            className="object-cover"
          />
        </div>
      ))}
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

      {/* contador de imagens e current */}
      <div className="absolute bottom-1 left-1/2 mr-8 flex flex-row rounded-full text-white">
        {images.map((image, index) => (
          <span
            key={index}
            className={`${
              index === currentIndex ? 'bg-brand-accent' : 'bg-brand-soft'
            } mx-1 flex h-2 w-2 flex-row rounded-full`}
          ></span>
        ))}
      </div>
    </div>
  )
}
