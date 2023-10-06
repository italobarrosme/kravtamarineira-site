import '@/styles/globals.scss'
import '@/styles/main.scss'

import { ReactNode } from 'react'
import { NextAuthProvider } from '@/providers/auth'
import { Metadata } from 'next'
import { ToastProvider } from '@/providers/toast'
import { Navigation } from '@/modules/Navigation'

type Props = {
  children?: ReactNode
}

export const metadata: Metadata = {
  title: 'Next.js Boilerplate',
  description: 'Next.js Boilerplate',
  manifest: '/manifest.json',
  icons: {
    apple: '/apple-icon.png',
  },
  themeColor: '#000',
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <body>
          <ToastProvider>
            <Navigation />
            <main className="min-h-screen-nav px-4 pt-24">{children}</main>
          </ToastProvider>
        </body>
      </NextAuthProvider>
    </html>
  )
}
