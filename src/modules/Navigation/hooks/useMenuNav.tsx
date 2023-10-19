import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

export const useMenuNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const pathName = usePathname()

  console.log(pathName)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const verifyPath = (path: string): boolean => {
    return pathName === path
  }

  const menus = [
    {
      name: 'Conheça a academia',
      icon: 'bx:bx-home',
      active: verifyPath('/academia'),
      onClick: () => {
        router.push('/academia')
        setIsMenuOpen(false)
      },
    },
    {
      name: 'O que é krav magá',
      icon: 'bx:bx-home',
      active: verifyPath('/kravmaga'),
      onClick: () => {
        router.push('/kravmaga')
        setIsMenuOpen(false)
      },
    },
    {
      name: 'Instrutores',
      icon: 'bx:bx-home',
      active: verifyPath('/instrutores'),
      onClick: () => {
        router.push('/instrutores')
        setIsMenuOpen(false)
      },
    },
    {
      name: 'Interessado em treinar',
      icon: 'bx:bx-home',
      active: verifyPath('/interessado'),
      onClick: () => {
        router.push('/interessado')
        setIsMenuOpen(false)
      },
    },
  ]

  return {
    menus,
    isMenuOpen,
    toggleMenu,
  }
}
