"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBug } from "react-icons/fa6";
import classNames from "classnames";
import { ModeToggle } from "@/components/mode-toggle";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import UserDropdown from "@/components/UserDropdown";

const NavBar = () => {
  const navLinks = [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "Issues",
      href: "/issues/list",
    },
  ];

  const pathname = usePathname();
  const { status, data: session } = useSession();

  return (
    <nav className="flex items-center justify-between px-5 py-3 mb-5 border-b mx-auto max-w-[1440px] font-poppins">
      <div className="flex items-center gap-6">
        <Link href="/">
          <FaBug />
        </Link>
        <ul className="flex gap-6 max-md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={classNames({
                  "text-foreground": link.href === pathname,
                  "text-foreground/60": link.href !== pathname,
                  "hover:text-primary transition-colors": true,
                })}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-5">
        <ModeToggle />
        {status === "authenticated" && <UserDropdown session={session} />}
        {status === "unauthenticated" && (
          <Button variant={"default"}>
            <Link href="/api/auth/signin">Login</Link>
          </Button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
