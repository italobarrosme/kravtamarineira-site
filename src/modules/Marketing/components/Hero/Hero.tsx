import { Text } from '@/shared/components/Text'
import { Gallery } from '../Gallery'

type infos = {
  title: string
  subtitle: string
  text: string
}

export type HeroProps = {
  infos: infos
  images: string[]
}

export const Hero = ({ infos, images }: HeroProps) => {
  return (
    <section className="w-full overflow-hidden">
      <Gallery images={images}></Gallery>
      <div className="min-h-[25rem] rounded-sm bg-brand-primary p-4 text-brand-light">
        <div className="max-w-7xl ">
          <Text variant="h1" className="text-3xl font-extrabold">
            {infos.title}
          </Text>
          <Text variant="h2" className="text-xl">
            {infos.subtitle}
          </Text>
          <Text variant="p" className="font-semibold">
            {infos.text}
          </Text>
        </div>
      </div>
    </section>
  )
}
