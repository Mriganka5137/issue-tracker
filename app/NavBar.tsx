"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBug } from "react-icons/fa6";
import classNames from "classnames";
const NavBar = () => {
  const navLinks = [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "Issues",
      href: "/issues",
    },
  ];

  const pathname = usePathname();
  return (
    <nav className=" flex gap-6 border-b h-14 items-center px-5 mb-5 font-poppins">
      <Link href="/">
        <FaBug />
      </Link>
      <ul className=" flex gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={classNames({
              "text-zinc-900": link.href === pathname,
              "text-zinc-500": link.href !== pathname,
              "hover:text-zinc-700 transition-colors": true,
            })}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
