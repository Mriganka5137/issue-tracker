import React from "react";
import NextLink from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  href: string;
  children: string;
  className?: string;
}

const Link = ({ children, href, className }: Props) => {
  return (
    <NextLink
      href={href}
      className={cn("text-sky-500 hover:underline", className)}
    >
      {children}
    </NextLink>
  );
};

export default Link;
