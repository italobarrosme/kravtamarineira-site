import { Hero } from '../components/Hero'

const mockDataAPI = {
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl sed aliquet vulputate, diam nisl molestie ipsum, nec aliqua',
}

const mockDataImages = [
  'https://source.unsplash.com/random/1920x1080/?4',
  'https://source.unsplash.com/random/1920x1080/?5',
  'https://source.unsplash.com/random/1920x1080/?6',
  'https://source.unsplash.com/random/1920x1080/?7',
]

export const Marketing = () => {
  return <Hero infos={mockDataAPI} images={mockDataImages}></Hero>
}
