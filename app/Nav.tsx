"use client"

import React from "react"
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Image,
} from "@nextui-org/react"
import { RiJavascriptLine } from "react-icons/ri"
import { usePathname } from "next/navigation"
import clsx from "clsx"

interface ILinks {
  label: string
  href: string
}

export default function Nav() {
  const currentPath: string = usePathname()
  console.log(currentPath)

  const links: ILinks[] = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ]

  return (
    <Navbar
      maxWidth="full"
      isBordered
      classNames={{
        wrapper: "justify-start",
      }}
    >
      <Link href="/" className="cursor-pointer flex items-center">
        <RiJavascriptLine size="32px" />
      </Link>
      <NavbarContent>
        {links.map((link) => (
          <NavbarItem key={link.href}>
            <Link
              href={link.href}
              className={`${clsx({
                underline: currentPath === link.href,
              })}`}
            >
              {link.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  )
}
