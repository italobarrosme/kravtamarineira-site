'use client'

import Link from 'next/link'
import { Icon } from '@iconify/react'
import { useRedirectTimeout } from '@/shared/hooks/useRedirectTimeout'
import { useRouter } from 'next/navigation'

const NotFound = () => {
  const { push } = useRouter()
  useRedirectTimeout(5000, '/', push)

  return (
    <>
      <section className="flex h-full w-full items-center p-16">
        <div className="container mx-auto my-8 flex flex-col items-center justify-center px-5">
          <div className="max-w-md text-center">
            <h2 className="mb-8 text-9xl font-extrabold text-brand-primary">
              Error 404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Desculpe, a página que você está procurando não foi encontrada.
            </p>
            <p className="mb-8 mt-4 text-brand-primary">
              Você será redirecionado para a página inicial em 5 segundos.
            </p>
            <Link
              href="/"
              passHref
              className="flex items-center justify-center gap-4"
            >
              <Icon icon={'bi:arrow-left-circle'} />
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
export default NotFound
