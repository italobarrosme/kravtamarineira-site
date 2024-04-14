import { ReactNode } from 'react'
import { Metadata } from 'next'

type Props = {
  children?: ReactNode
}

export const metadata: Metadata = {
  title: 'Academia - Ambiente de treino',
  description: '',
  manifest: '/manifest.json',
  icons: {
    apple: '/apple-icon.png',
  },
}

export default function PageLayoutAcademia({ children }: Props) {
  return (
    <main className="flex min-h-screen-hero flex-col items-center gap-4 bg-brand-primary p-4">
      {children}
    </main>
  )
}
