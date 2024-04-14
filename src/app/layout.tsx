import '@/styles/globals.css'

import { ReactNode } from 'react'
import { Metadata } from 'next'
import { Navigation } from '@/modules/Navigation'
import { FooterTemplate } from '@/modules/Navigation/template/FooterTemplate'
import { Nunito } from 'next/font/google'
import { ToastProvider } from '@/providers/toast'

type Props = {
  children?: ReactNode
}

const nunito = Nunito({
  subsets: ['latin-ext'],
})

export const metadata: Metadata = {
  title: 'Academia de Krav maga',
  description: 'Academia de Krav maga',
  manifest: '/manifest.json',
  icons: {
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={nunito.className}>
      <body className="flex flex-col">
        <ToastProvider>
          <Navigation />
          <main>{children}</main>
          <FooterTemplate />
        </ToastProvider>
      </body>
    </html>
  )
}
