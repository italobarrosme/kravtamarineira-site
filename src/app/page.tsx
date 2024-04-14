import { Hero } from '@/modules/Marketing/components/Hero'
import { getCarrousels } from '@/modules/Marketing/services'

const mockDataAPI = {
  title: 'Porque escolher krav maga?',
  subtitle: '',
  text: `O Krav Maga é uma arte marcial desenvolvida em Israel, conhecida por sua eficiência em situações de autodefesa e combate corpo a corpo. Criado por Imi Lichtenfeld nas décadas de 1930 e 1940, o Krav Maga foi inicialmente concebido como um sistema de defesa pessoal para os judeus que enfrentavam a perseguição na Europa.
  A importância de praticar defesa pessoal, como o Krav Maga, não pode ser subestimada. Vivemos em um mundo onde ameaças à nossa segurança pessoal podem surgir a qualquer momento, seja em situações de violência urbana, assaltos, agressões, ou até mesmo em casos extremos como sequestros. Ter habilidades de autodefesa não apenas aumenta a nossa capacidade de nos protegermos em situações perigosas, mas também aumenta a nossa confiança e sensação de segurança no dia a dia.
  Além disso, a prática de defesa pessoal, como o Krav Maga, pode proporcionar uma série de benefícios físicos e mentais. Fisicamente, o treinamento ajuda a desenvolver força, resistência, flexibilidade e coordenação motora. Mentalmente, o Krav Maga promove disciplina, foco, controle emocional e autoconfiança.
  `,
}

export default async function Home() {
  const { data } = await getCarrousels()

  const images = data.map((item) => {
    return item.attributes.Media.data.attributes.url
  })

  return (
    <>
      <Hero infos={mockDataAPI} images={images}></Hero>
    </>
  )
}
