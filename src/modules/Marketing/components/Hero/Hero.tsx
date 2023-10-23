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
    <section className="w-full">
      <Gallery images={images} />
      <div className="px-4">
        <h1 className="text-2xl">{infos.title}</h1>
        <p>{infos.subtitle}</p>
      </div>
      <div className="px-4">
        <p>{infos.text}</p>
      </div>
    </section>
  )
}
