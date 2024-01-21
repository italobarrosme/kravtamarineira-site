'use server'

import { getContacts } from './dataFetchers'
import { Contacts } from './types'

export async function getContactsAction() {
  const dataApi: Contacts = await getContacts()

  const socialMedias = [
    {
      name: 'kravmaga.tamarineira facebook',
      link: '',
      icon: 'entypo-social:facebook',
    },
    {
      name: 'kravmaga.tamarineira instagram',
      link: dataApi.data.attributes.Instagram,
      icon: 'mdi:instagram',
    },
  ]

  const contacts = [
    {
      label: 'whatsapp',
      value: dataApi.data.attributes.Phone_1,
      icon: 'mdi:whatsapp',
      link: dataApi.data.attributes.Whatsapp,
    },
    // {
    //   label: 'email',
    //   value: dataApi.data.attributes.Email || '',
    //   link: `mailto:${dataApi.data.attributes.Whatsapp}`,
    //   icon: 'mdi:email',
    // },
  ]

  const address = {
    label: 'Endereço',
    value: dataApi.data.attributes.Address,
    link: 'https://www.google.com.br/maps/place/Centro+de+Krav+Maga+de+Pernambuco/@-8.0317762,-34.9011009,17z/data=!3m1!4b1!4m6!3m5!1s0x7ab18e38671d8d9:0x57d1106ff6348564!8m2!3d-8.0317762!4d-34.8985206!16s%2Fg%2F11b77whfss?entry=ttu',
    icon: 'mdi:map-marker',
  }

  return {
    socialMedias,
    contacts,
    address,
  }
}
