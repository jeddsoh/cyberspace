import React from "react"
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Image,
} from "@nextui-org/react"

interface ILinks {
  label: string
  href: string
}

export default function Nav() {
  const links: ILinks[] = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ]

  return (
    <Navbar maxWidth="full" isBordered>
        <Link href="/" className="cursor-pointer flex items-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={32}
            height={32}
            radius="none"
          />
        </Link>
        <NavbarContent className="flex gap-4">
          {links.map((link) => (
            <NavbarItem key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </NavbarItem>
          ))}
        </NavbarContent>
    </Navbar>
  )
}
