import Link from 'next/link'

type Menu = {
  name: string
  icon?: string
  href?: string
  onClick?: () => void
}

type NavbarProps = {
  logo?: string
  menus: Menu[]
}

export const Navbar = ({ menus }: NavbarProps) => {
  return (
    <nav className="absolute top-0 flex h-20 w-full items-center justify-between bg-brand-dark px-4 shadow-sm">
      <Link href="/">
        {/* <Image src={logo} alt="logo" width={180} height={180} /> */}
        <h1 className="text-brand-light">Academia de Krav maga</h1>
      </Link>
      <ul className="flex flex-row">
        {menus.map((menu, index) => (
          <li
            key={index}
            className="my-4 cursor-pointer flex-row items-center justify-between p-0 px-2 text-xs font-semibold text-brand-secondary hover:text-white hover:underline sm:flex"
            onClick={menu.onClick}
          >
            {menu.name}
          </li>
        ))}
      </ul>
    </nav>
  )
}
