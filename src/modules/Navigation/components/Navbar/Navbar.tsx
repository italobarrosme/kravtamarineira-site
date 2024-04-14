import { cn } from '@/utils'
import Link from 'next/link'
import Image from 'next/image'

type Menu = {
  name: string
  icon?: string
  href?: string
  active: boolean
  accent: boolean
  onClick?: () => void
}

type NavbarProps = {
  logo: string
  menus: Menu[]
}

export const Navbar = ({ menus, logo }: NavbarProps) => {
  return (
    <nav className="flex h-20 w-full items-center justify-center gap-24 bg-brand-light px-4 shadow-sm">
      <Link href="/" className="mr-8 flex items-center">
        <Image src={logo} alt="logo" width={42} height={42} className="mr-5" />
        <h1 className="font-semibold text-brand-dark">
          Academia de Krav maga - Unidade Tamarineira
        </h1>
      </Link>
      <ul className="flex flex-row gap-4">
        {menus.map((menu, index) => (
          <li
            key={index}
            className={cn(
              'my-4 cursor-pointer flex-row items-center justify-between p-0 px-2 text-base font-semibold text-brand-secondary hover:underline sm:flex',
              menu.active ? 'underline' : 'text-brand-dark',
              menu.accent
                ? 'bg-brand-accent text-brand-light font-medium p-2 rounded-sm'
                : ''
            )}
            onClick={menu.onClick}
          >
            {menu.name}
          </li>
        ))}
      </ul>
    </nav>
  )
}
