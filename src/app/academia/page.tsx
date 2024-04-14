import { ShowCase } from '@/modules/Ambiance/components/'
import { getAmbience } from '@/modules/Ambiance/services'
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

export default async function Academia() {
  const response = await getAmbience()

  const images = response.data.attributes.Academy.data.map((image) => {
    return {
      link: image.attributes.url,
      alt: image.attributes.caption || image.attributes.alternativeText || '',
    }
  })

  return (
    <section className="">
      <div className="max-w-7xl">
        <ShowCase ArrayImgs={images} />
      </div>
    </section>
  )
}
