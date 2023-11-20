import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import Link from "next/link";
import { Button } from "./ui/button";
import { Session } from "next-auth";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const UserDropdown = ({ session }: { session: Session }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="cursor-pointer ">
          <AvatarImage src={session.user!.image!} />
          <AvatarFallback>MG</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="px-5 py-3 bg-secondary">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>{session.user?.name}</DropdownMenuItem>
        <DropdownMenuItem className=" text-primary">
          {session.user?.email}
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <Button variant={"outline"} className="mt-5 ">
          <Link href="/api/auth/signout">Logout</Link>
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
