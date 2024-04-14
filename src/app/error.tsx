'use client'

import { Button } from '@/shared/components/Button/Button'
import { Text } from '@/shared/components/Text'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen-hero flex-col items-center justify-center gap-4 bg-brand-accent px-4 py-8 text-brand-light">
      <Text variant="h2" className="text-3xl">
        Ocorreu um erro inesperado. Por favor, tente novamente.
      </Text>
      <Button onClick={reset} className="bg-brand-accent-hover">
        Tentar novamente
      </Button>
    </div>
  )
}
