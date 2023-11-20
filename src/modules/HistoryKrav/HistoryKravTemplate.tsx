import { Text } from '@/shared/components/Text'
import Image from 'next/image'

const mockDataAPI = {
  title: 'Historia do kravmaga',
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  text1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl sed aliquet vulputate, diam nisl molestie ips
  um, nec aliquam libero odio sit amet eros. Nulla facilisi. Nulla facilisi. Praesent vel felis id mauris ultricies ultrices. Sed
  auctor, nisl sit amet aliquet pulvinar, magna velit ultricies purus, sit amet aliquam libero odio sit amet eros. Nulla facilisi.
  Nulla facilisi. Praesent vel felis id mauris ultricies ultrices. Sed auctor, nisl sit amet aliquet pulvinar, magna velit ultricies
  purus, sit amet aliquam libero odio sit amet eros. Nulla facilisi. Nulla facilisi. Praesent vel felis id mauris ultricies ultrices.`,
  text2: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl sed aliquet vulputate, diam nisl molestie ips
  um, nec aliquam libero odio sit amet eros. Nulla facilisi. Nulla facilisi. Praesent vel felis id mauris ultricies ultrices. Sed
  auctor, nisl sit amet aliquet pulvinar, magna velit ultricies purus, sit amet aliquam libero odio sit amet eros. Nulla facilisi.
  Nulla facilisi. Praesent vel felis id mauris ultricies ultrices. Sed auctor, nisl sit amet aliquet pulvinar, magna velit ultricies
  purus, sit amet aliquam libero odio sit amet eros. Nulla facilisi. Nulla facilisi. Praesent vel felis id mauris ultricies ultrices.`,
  text3: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl sed aliquet vulputate, diam nisl molestie ips
  um, nec aliquam libero odio sit amet eros. Nulla facilisi. Nulla facilisi. Praesent vel felis id mauris ultricies ultrices. Sed
  auctor, nisl sit amet aliquet pulvinar, magna velit ultricies purus, sit amet aliquam libero odio sit amet eros. Nulla facilisi.`,
}

const mockDataImages = [
  'https://source.unsplash.com/random/1920x1080/',
  'https://source.unsplash.com/random/1920x1080/?25',
  'https://source.unsplash.com/random/1920x1080/?23',
  'https://source.unsplash.com/random/1920x1080/?85',
]

export const HistoryKravTemplate = () => {
  return (
    <>
      <Text variant="h3">{mockDataAPI.title}</Text>
      <Text variant="h4">{mockDataAPI.subtitle}</Text>
      <div className="flex max-w-3xl flex-col gap-4">
        <Text variant="p">{mockDataAPI.text1}</Text>
        <Text variant="p">{mockDataAPI.text2}</Text>
        <Image src={mockDataImages[0]} width={1920} height={1080} alt="teste" />
        <Text variant="p">{mockDataAPI.text3}</Text>
        <Image src={mockDataImages[0]} width={1920} height={1080} alt="teste" />
        <Text variant="p">{mockDataAPI.text3}</Text>
      </div>
    </>
  )
}
