import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

export const useMenuNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const pathName = usePathname()

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
      accent: false,
      onClick: () => {
        router.push('/academia')
        setIsMenuOpen(false)
      },
    },
    {
      name: 'O que é krav magá',
      icon: 'bx:bx-home',
      active: verifyPath('/kravmaga'),
      accent: false,
      onClick: () => {
        router.push('/kravmaga')
        setIsMenuOpen(false)
      },
    },
    {
      name: 'Instrutores',
      icon: 'bx:bx-home',
      active: verifyPath('/instrutores'),
      accent: false,
      onClick: () => {
        router.push('/instrutores')
        setIsMenuOpen(false)
      },
    },
    {
      name: 'Interessado em treinar?',
      icon: 'bx:bx-home',
      active: verifyPath('/interessado'),
      accent: true,
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
