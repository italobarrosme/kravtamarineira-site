'use client'

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
    <div className="flex min-h-screen-hero flex-col items-center gap-4 bg-brand-secondary px-4 py-8 text-brand-light">
      <h2>Error na busca dos dados</h2>
      <button onClick={() => reset()}>Tente novamente</button>
    </div>
  )
}
