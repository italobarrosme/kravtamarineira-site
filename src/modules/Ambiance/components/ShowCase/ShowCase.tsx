import { CardInfo } from '@/shared/components/CardInfo'
import { DetailCase } from './DetailCase'
import { cn } from '@/utils'
import Image from 'next/image'

type Image = {
  link: string
  alt: string
}

const ArrayImagens: Image[] = [
  {
    link: 'https://source.unsplash.com/random/1920x1920',
    alt: 'Imagem 1',
  },
  {
    link: 'https://source.unsplash.com/random/1920x1920',
    alt: 'Imagem 2',
  },
  {
    link: 'https://source.unsplash.com/random/1920x1920',
    alt: 'Imagem 3',
  },
  {
    link: 'https://source.unsplash.com/random/1920x1920',
    alt: 'Imagem 4',
  },
  {
    link: 'https://source.unsplash.com/random/1920x1920',
    alt: 'Imagem 5',
  },
  {
    link: 'https://source.unsplash.com/random/1920x1920',
    alt: 'Imagem 6',
  },
  {
    link: 'https://source.unsplash.com/random/1920x1920',
    alt: 'Imagem 7',
  },
  {
    link: 'https://source.unsplash.com/random/1920x1920',
    alt: 'Imagem 8',
  },
  {
    link: 'https://source.unsplash.com/random/1920x1920',
    alt: 'Imagem 9',
  },
  {
    link: 'https://source.unsplash.com/random/1920x1920',
    alt: 'Imagem 10',
  },
  {
    link: 'https://source.unsplash.com/random/1920x1920',
    alt: 'Imagem 11',
  },
  {
    link: 'https://source.unsplash.com/random/1920x1920',
    alt: 'Imagem 12',
  },
  {
    link: 'https://source.unsplash.com/random/1920x1920',
    alt: 'Imagem 13',
  },
  {
    link: 'https://source.unsplash.com/random/1920x1920',
    alt: 'Imagem 14',
  },
  {
    link: 'https://source.unsplash.com/random/1920x1920',
    alt: 'Imagem 15',
  },
  {
    link: 'https://source.unsplash.com/random/1920x1920',
    alt: 'Imagem 16',
  },
  {
    link: 'https://source.unsplash.com/random/1920x1920',
    alt: 'Imagem 17',
  },
  {
    link: 'https://source.unsplash.com/random/1920x1920',
    alt: 'Imagem 18',
  },
]

export const ShowCase = () => {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
      {ArrayImagens.map((imagem, index) => (
        <div key={index} className={cn('relative h-96  cursor-pointer')}>
          <Image
            src={imagem.link}
            alt={imagem.alt}
            className="object-cover"
            fill
          />
          <DetailCase image={imagem}>
            <CardInfo className="absolute bottom-0 right-0 bg-transparent">
              <p className="text-brand-light">{imagem.alt}</p>
            </CardInfo>
          </DetailCase>
        </div>
      ))}
    </div>
  )
}
