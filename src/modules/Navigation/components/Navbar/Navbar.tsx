import { cn } from '@/utils'
import Link from 'next/link'

type Menu = {
  name: string
  icon?: string
  href?: string
  active: boolean
  accent: boolean
  onClick?: () => void
}

type NavbarProps = {
  logo?: string
  menus: Menu[]
}

export const Navbar = ({ menus }: NavbarProps) => {
  return (
    <nav className="absolute top-0 flex h-20 w-full items-center justify-center gap-4 bg-brand-dark px-4 shadow-sm">
      <Link href="/" className="mr-64">
        {/* <Image src={logo} alt="logo" width={180} height={180} /> */}
        <h1 className="text-brand-light">Academia de Krav maga</h1>
      </Link>
      <ul className="flex flex-row gap-4">
        {menus.map((menu, index) => (
          <li
            key={index}
            className={cn(
              'my-4 cursor-pointer flex-row items-center justify-between p-0 px-2 text-base font-semibold text-brand-secondary hover:underline sm:flex',
              menu.active ? 'underline' : 'text-brand-light',
              menu.accent
                ? 'bg-brand-accent text-brand-dark p-2 rounded-sm'
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
