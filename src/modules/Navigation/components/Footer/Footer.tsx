'use client'
import { Icon } from '@iconify/react'
import Image from 'next/image'

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

type Address = {
  label: string
  value: string
  icon: string
  link?: string
}

export type FooterProps = {
  socialMedias: SocialMedia[]
  contacts: Contact[]
  logo: string
  address: Address
}

export const Footer = ({
  socialMedias,
  contacts,
  logo,
  address,
}: FooterProps) => {
  return (
    <footer className="flex w-full flex-col gap-4 border-solid bg-brand-light p-4 text-brand-dark">
      <section className="flex flex-col gap-4">
        <div className="flex w-full items-center gap-4">
          <Image src={logo} alt="logo" width={42} height={42} />
          <a
            className="max-w-xs text-xs font-semibold sm:text-sm"
            href={address.link}
            target="_blank"
          >
            {address.value}
          </a>
        </div>

        <h3 className="text-xs font-semibold md:text-base">
          | Entre em contato conosco
        </h3>
        <ul className="max-w-sm flex-col gap-4 sm:max-w-full">
          {contacts.map((contact) => (
            <li
              key={contact.label}
              className="flex items-center gap-2 hover:text-brand-accent"
            >
              <Icon icon={contact.icon} width={18} height={18} />
              <a
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center gap-2 text-xs sm:text-sm"
              >
                {contact.value}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex max-w-xs">
          {socialMedias.map((socialMedia) => (
            <li
              key={socialMedia.name}
              className="flex items-center gap-2 hover:text-brand-accent"
            >
              <Icon icon={socialMedia.icon} width={18} />
              <a
                href={socialMedia.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center gap-2 text-xs sm:text-sm"
              ></a>
            </li>
          ))}
        </ul>
      </section>
      <section className="flex flex-col items-center justify-center gap-2 pb-4">
        <p className="text-xs font-semibold">
          <a
            href="https://www.orangescreen.com.br/"
            className="text-blue-500 hover:text-blue-700"
          >
            Coqueiro Digital
          </a>{' '}
          © 2023 All Rights Reserved{' '}
        </p>
      </section>
    </footer>
  )
}
