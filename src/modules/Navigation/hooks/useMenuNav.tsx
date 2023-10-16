import { useState } from 'react'
import { useRouter } from 'next/navigation'

export const useMenuNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menus = [
    {
      name: 'Conheça a academia',
      icon: 'bx:bx-home',
      onClick: () => {
        setIsMenuOpen(false)
      },
    },
    {
      name: 'O que é krav magá',
      icon: 'bx:bx-home',
      onClick: () => {
        router.push('/')
        setIsMenuOpen(false)
      },
    },
    {
      name: 'Instrutores',
      icon: 'bx:bx-home',
      onClick: () => {
        router.push('/')
        setIsMenuOpen(false)
      },
    },
    {
      name: 'Interessado em treinar',
      icon: 'bx:bx-home',
      onClick: () => {
        router.push('/')
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
