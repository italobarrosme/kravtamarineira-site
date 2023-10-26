import '@/styles/globals.scss'
import '@/styles/main.scss'

import { Nunito } from 'next/font/google'
import { ReactNode } from 'react'
import { NextAuthProvider } from '@/providers/auth'
import { Metadata } from 'next'
import { Navigation } from '@/modules/Navigation'

type Props = {
  children?: ReactNode
}

const nunito = Nunito({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
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
      <NextAuthProvider>
        <body>
          <main className="min-h-screen-nav pt-20">
            <Navigation />
            {children}
          </main>
        </body>
      </NextAuthProvider>
    </html>
  )
}
