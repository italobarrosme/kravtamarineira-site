import { Footer } from '../components/Footer'
import { getContactsAction } from '../services/actions'

export const FooterTemplate = async () => {
  const { address, contacts, socialMedias } = await getContactsAction()

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
