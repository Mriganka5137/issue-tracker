"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBug } from "react-icons/fa6";
import classNames from "classnames";
import { ModeToggle } from "@/components/mode-toggle";
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
    <nav className="flex items-center justify-between px-5 mb-5 border-b h-14 font-poppins">
      <div className="flex items-center gap-6">
        <Link href="/">
          <FaBug />
        </Link>
        <ul className="flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={classNames({
                "text-foreground": link.href === pathname,
                "text-foreground/60": link.href !== pathname,
                "hover:text-primary transition-colors": true,
              })}
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </div>
      <ModeToggle />
    </nav>
  );
};

export default NavBar;
