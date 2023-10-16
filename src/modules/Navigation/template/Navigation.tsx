'use client'

import { Burger } from '../components/Burger'
import { Navbar } from '../components/Navbar'
import { useMenuNav } from '../hooks'
import { Icon } from '@iconify/react'
import { useOnClickOutside, useScreen } from 'usehooks-ts'
import { useEffect, useRef, useState } from 'react'

export const Navigation = () => {
  const { isMenuOpen, menus, toggleMenu } = useMenuNav()
  const [screenWidth, setScreenWidth] = useState(0)

  const screen = useScreen()

  useEffect(() => {
    if (screen) {
      setScreenWidth(screen.width)
    }
  }, [screen])

  const ref = useRef(null)
  const clickOutSideFn = () => {
    if (isMenuOpen) toggleMenu()
  }

  useOnClickOutside(ref, clickOutSideFn)

  return (
    <>
      {screenWidth < 768 ? (
        <Burger
          ref={ref}
          logo="/logo-line-black.png"
          menus={menus}
          isMenuOpen={isMenuOpen}
        >
          <Icon
            icon={isMenuOpen ? 'eva:close-outline' : 'eva:menu-outline'}
            className="cursor-pointer text-2xl text-brand-primary"
            onClick={toggleMenu}
          />
        </Burger>
      ) : (
        <Navbar menus={menus} />
      )}
    </>
  )
}
