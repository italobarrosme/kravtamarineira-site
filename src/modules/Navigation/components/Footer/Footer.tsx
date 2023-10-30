'use client'
import { Icon } from '@iconify/react'

type SocialMedia = {
  name: string
  link: string
  icon: string
}

type Contact = {
  label: string
  value: string
  icon: string
  link?: string
}

export type FooterProps = {
  socialMedias: SocialMedia[]
  contacts: Contact[]
}

export const Footer = ({ socialMedias, contacts }: FooterProps) => {
  return (
    <footer className="flex w-full flex-col gap-4 bg-brand-light p-4 text-brand-dark">
      <section className="flex flex-col  gap-4">
        <h3 className="text-xs font-semibold md:text-base">
          Entre em contato conosco
        </h3>
        <ul>
          {socialMedias.map((socialMedia) => (
            <li key={socialMedia.name} className="hover:text-brand-accent">
              <a
                href={socialMedia.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center gap-2 text-xs sm:text-sm"
              >
                <Icon icon={socialMedia.icon} width={18} />@{socialMedia.name}
              </a>
            </li>
          ))}
        </ul>
        <ul>
          {contacts.map((contact) => (
            <li key={contact.label} className="hover:text-brand-accent">
              <a
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center gap-2 text-xs sm:text-sm"
              >
                <Icon icon={contact.icon} width={18} />
                {contact.value}
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section className="flex flex-col items-center justify-center gap-2 pb-4">
        <p className="text-xs font-semibold">
          desenvolvido por{' '}
          <a
            href="https://www.orangescreen.com.br/"
            className="text-orange-500"
          >
            orangeScreen
          </a>{' '}
          © 2023
        </p>
      </section>
    </footer>
  )
}
