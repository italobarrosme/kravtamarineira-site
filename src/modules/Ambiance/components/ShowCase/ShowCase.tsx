import { CardInfo } from '@/shared/components/CardInfo'
import { DetailCase } from './DetailCase'
import { cn } from '@/utils'
import Image from 'next/image'

type ImagesProps = {
  ArrayImgs: {
    link: string
    alt: string
  }[]
}

export const ShowCase = ({ ArrayImgs }: ImagesProps) => {
  return (
    <div className="mx-5 w-full space-y-6 rounded-lg text-white md:max-w-screen-lg">
      <div className="col-span-2 grid grid-cols-6 gap-2">
        {ArrayImgs.map((imagem, index) => (
          <div
            key={index}
            className={cn(
              `max-h-[14rem] overflow-hidden rounded-xl relative cursor-pointer`,
              index === 0 && 'col-span-6',
              index === 1 && 'col-span-4',
              index !== 0 && index !== 1 && 'col-span-2'
            )}
          >
            <Image
              src={imagem.link}
              alt={imagem.alt}
              className="h-full w-full object-cover"
              width={1920}
              height={1920}
            />
            <DetailCase image={imagem}>
              <CardInfo className="absolute bottom-0 right-0 bg-transparent">
                <p className="text-brand-light">{imagem.alt}</p>
              </CardInfo>
            </DetailCase>
          </div>
        ))}
      </div>
    </div>
  )
}
