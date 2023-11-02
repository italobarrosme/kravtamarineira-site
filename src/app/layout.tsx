import '@/styles/globals.scss'
import '@/styles/main.scss'

import { ReactNode } from 'react'
import { Metadata } from 'next'
import { Navigation } from '@/modules/Navigation'
import { FooterTemplate } from '@/modules/Navigation/template/FooterTemplate'
import { Nunito } from 'next/font/google'

type Props = {
  children?: ReactNode
}

const nunito = Nunito({
  display: 'swap',
  subsets: ['latin-ext'],
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: 'Academia de Krav maga',
  description: 'Academia de Krav maga',
  manifest: '/manifest.json',
  icons: {
    apple: '/apple-icon.png',
  },
  themeColor: '#000',
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={nunito.className}>
      <body>
        <main className="min-h-screen-nav pt-20">
          <Navigation />
          {children}
          <FooterTemplate />
        </main>
      </body>
    </html>
  )
}
