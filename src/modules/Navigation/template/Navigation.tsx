'use client'

import { MenuAuth } from '@/modules/Authentication'
import { Navbar } from '../components/Navbar'
import { useMenuNav } from '../hooks'

export const Navigation = () => {
  const { isMenuOpen, menus, toggleMenu, signIn, data } = useMenuNav()

  return (
    <Navbar logo="/logo-line-black.png" menus={menus} isMenuOpen={isMenuOpen}>
      <MenuAuth
        icon={isMenuOpen ? 'lucide:x' : 'quill:hamburger'}
        onClick={data?.user ? toggleMenu : () => signIn()}
        data={data}
      />
    </Navbar>
  )
}
