import { Footer } from '../components/Footer'

export const FooterTemplate = () => {
  const socialMedias = [
    {
      name: 'kravmaga.tamarineira',
      link: 'https://www.facebook.com/kravmaga.tamarineira/',
      icon: 'entypo-social:facebook',
    },
    {
      name: 'kravmaga.tamarineira',
      link: 'https://www.instagram.com/kravmaga.tamarineira/',
      icon: 'mdi:instagram',
    },
  ]

  const contacts = [
    {
      label: 'whatsapp',
      value: '(81) 99999-9999',
      icon: 'mdi:whatsapp',
      link: `https://api.whatsapp.com/send?phone=5581999999999&text=Olá%20Jovem`,
    },
    {
      label: 'email',
      value: 'email@gmail.com',
      link: 'mailto:email@gmail.com',
      icon: 'mdi:email',
    },
  ]

  const address = {
    label: 'Endereço',
    value: 'R. Gen. Abreu e Lima, 407 - Tamarineira, Recife - PE, 50040-210',
    link: 'https://www.google.com.br/maps/place/Centro+de+Krav+Maga+de+Pernambuco/@-8.0317762,-34.9011009,17z/data=!3m1!4b1!4m6!3m5!1s0x7ab18e38671d8d9:0x57d1106ff6348564!8m2!3d-8.0317762!4d-34.8985206!16s%2Fg%2F11b77whfss?entry=ttu',
    icon: 'mdi:map-marker',
  }
  return (
    <>
      <Footer
        socialMedias={socialMedias}
        contacts={contacts}
        logo={'/logo-krav.png'}
        address={address}
      />
    </>
  )
}
