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
        <h1 className="text-2xl font-extrabold">{infos.title}</h1>
        <p className="text-xs">{infos.subtitle}</p>
        <p className="mt-4 text-sm">{infos.text}</p>
      </div>
    </section>
  )
}
