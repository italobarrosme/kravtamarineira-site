import { Text } from '@/shared/components/Text'
import Image from 'next/image'
import { getHistoryKravAction } from './services/actions'

const mockDataImages = [
  'https://source.unsplash.com/random/1920x1080/',
  'https://source.unsplash.com/random/1920x1080/?25',
  'https://source.unsplash.com/random/1920x1080/?23',
  'https://source.unsplash.com/random/1920x1080/?85',
]

export const HistoryKravTemplate = async () => {
  const data = await getHistoryKravAction()

  return (
    <>
      <Text variant="h2">{data.text1.title}</Text>
      <div className="mb-8 flex max-w-3xl flex-col gap-4">
        {data.text1.paragraph.map((paragraph: string, index: number) => (
          <Text key={index} variant="p">
            {paragraph}
          </Text>
        ))}
      </div>

      <Text variant="h2">{data.text2.title}</Text>
      <div className="mb-32 flex max-w-3xl flex-col gap-4">
        {data.text2.paragraph.map((paragraph: string, index: number) => (
          <Text key={index} variant="p">
            {paragraph}
          </Text>
        ))}
        <Image src={mockDataImages[0]} width={1920} height={1080} alt="teste" />
      </div>
    </>
  )
}
