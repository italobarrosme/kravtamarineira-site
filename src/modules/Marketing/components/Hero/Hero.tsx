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
    <section>
      <Gallery images={images} />
      <div className="px-16">
        <h1 className="text-2xl">{infos.title}</h1>
        <p>{infos.subtitle}</p>
      </div>
      <div className="px-16">
        <p>{infos.text}</p>
      </div>
    </section>
  )
}
