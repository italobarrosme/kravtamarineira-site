import { Text } from '@/shared/components/Text'
import Image from 'next/image'
import { getHistoryKravAction } from '@/modules/HistoryKrav/services/actions'

export default async function Kravmaga() {
  const data = await getHistoryKravAction()

  return (
    <section className="flex min-h-screen-hero max-w-screen-xl flex-col gap-4 rounded-sm bg-brand-light p-4 text-brand-dark shadow-md">
      <Text variant="h2" className="max-w-lg text-2xl">
        {data.text1.title}
      </Text>

      <div className="mb-8 flex max-w-3xl flex-col gap-4">
        {data.text1.paragraph.map((paragraph: string, index: number) => (
          <Text key={index} variant="p">
            {paragraph}
          </Text>
        ))}
      </div>
      <Image
        src={data.images[0]}
        width={500}
        height={500}
        alt="movimento de golpe"
      />

      <Text variant="h2" className="max-w-lg text-2xl">
        {data.text2.title}
      </Text>
      <Image src={data.images[1]} width={500} height={500} alt="Ime fotos" />
      <div className="mb-32 flex max-w-3xl flex-col gap-4">
        {data.text2.paragraph.map((paragraph: string, index: number) => (
          <Text key={index} variant="p">
            {paragraph}
          </Text>
        ))}
      </div>
    </section>
  )
}
