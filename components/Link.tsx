import React from "react";
import NextLink from "next/link";

interface Props {
  href: string;
  children: string;
}

const Link = ({ children, href }: Props) => {
  return (
    <NextLink href={href} className=" text-primary/80 hover:underline">
      {children}
    </NextLink>
  );
};

export default Link;
