import { ShowCase } from '@/modules/Ambiance/components/'
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
]

export default function Academia() {
  return (
    <section className="flex min-h-screen w-screen items-center justify-center bg-brand-primary p-10 px-4 ">
      <ShowCase ArrayImgs={ArrayImagens} />
    </section>
  )
}
