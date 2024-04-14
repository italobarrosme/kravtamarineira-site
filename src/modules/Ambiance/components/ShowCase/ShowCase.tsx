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
    <div className="w-full rounded-lg text-white">
      <div className="col-span-3 grid grid-cols-12 gap-2">
        {ArrayImgs.map((imagem, index) => (
          <div
            key={index}
            className={cn(
              `max-h-[14rem] overflow-hidden rounded-xl relative cursor-pointer`,
              index === 0 && 'col-span-6',
              index === 1 && 'col-span-4',
              index === 3 && 'col-span-4',
              index === 5 && 'col-span-6',
              index === 7 && 'col-span-4',
              index !== 0 &&
                index !== 1 &&
                index !== 3 &&
                index !== 7 &&
                index !== 5 &&
                'col-span-2'
            )}
          >
            <Image
              src={process.env.NEXT_PUBLIC_BASE_URL_UPLOADS + imagem.link}
              alt={imagem.alt}
              className="h-full w-full object-cover"
              width={1920}
              height={1920}
            />
            <DetailCase image={imagem}>
              <CardInfo className="absolute bottom-5 bg-transparent">
                <p className="text-xs text-brand-light">{imagem.alt}</p>
              </CardInfo>
            </DetailCase>
          </div>
        ))}
      </div>
    </div>
  )
}
