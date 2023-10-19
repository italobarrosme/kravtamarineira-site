import { useState } from 'react'
<<<<<<< HEAD
import { useRouter, usePathname } from 'next/navigation'
=======
import { useRouter } from 'next/navigation'
>>>>>>> 0d9fdb9bd2cb8de3efc612dfae33f6c78f589cd0

export const useMenuNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
<<<<<<< HEAD
  const pathName = usePathname()

  console.log(pathName)
=======
>>>>>>> 0d9fdb9bd2cb8de3efc612dfae33f6c78f589cd0

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

<<<<<<< HEAD
  const verifyPath = (path: string): boolean => {
    return pathName === path
  }

=======
>>>>>>> 0d9fdb9bd2cb8de3efc612dfae33f6c78f589cd0
  const menus = [
    {
      name: 'Conheça a academia',
      icon: 'bx:bx-home',
<<<<<<< HEAD
      active: verifyPath('/academia'),
      onClick: () => {
        router.push('/academia')
=======
      onClick: () => {
>>>>>>> 0d9fdb9bd2cb8de3efc612dfae33f6c78f589cd0
        setIsMenuOpen(false)
      },
    },
    {
      name: 'O que é krav magá',
      icon: 'bx:bx-home',
<<<<<<< HEAD
      active: verifyPath('/kravmaga'),
      onClick: () => {
        router.push('/kravmaga')
=======
      onClick: () => {
        router.push('/')
>>>>>>> 0d9fdb9bd2cb8de3efc612dfae33f6c78f589cd0
        setIsMenuOpen(false)
      },
    },
    {
      name: 'Instrutores',
      icon: 'bx:bx-home',
<<<<<<< HEAD
      active: verifyPath('/instrutores'),
      onClick: () => {
        router.push('/instrutores')
=======
      onClick: () => {
        router.push('/')
>>>>>>> 0d9fdb9bd2cb8de3efc612dfae33f6c78f589cd0
        setIsMenuOpen(false)
      },
    },
    {
      name: 'Interessado em treinar',
      icon: 'bx:bx-home',
<<<<<<< HEAD
      active: verifyPath('/interessado'),
      onClick: () => {
        router.push('/interessado')
=======
      onClick: () => {
        router.push('/')
>>>>>>> 0d9fdb9bd2cb8de3efc612dfae33f6c78f589cd0
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
