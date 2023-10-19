'use client'

import { useEffect } from 'react'

export const useRedirectTimeout = (
  timeout: number,
  redirectPath: string,
  redirectFn: (redirectPath: string) => void
) => {
  useEffect(() => {
    setTimeout(() => {
      redirectFn(redirectPath)
    }, timeout)
  }, [redirectFn, redirectPath, timeout])
}
