import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import prisma from "@/prisma/client";

const AsigneeSelect = async () => {
  let users;
  try {
    users = await prisma.user.findMany({
      orderBy: {
        name: "asc",
      },
    });
  } catch (error) {
    throw new Error();
  }
  if (!users) {
    return;
  }
  return (
    <Select>
      <SelectTrigger className="w-[150px] bg-secondary flex-1">
        <SelectValue placeholder="Select Assignee" />
      </SelectTrigger>
      <SelectContent className=" bg-secondary">
        <SelectGroup>
          <SelectLabel>Asignee</SelectLabel>
          {users.map((user) => (
            <SelectItem key={user.id} value={user.id}>
              {user.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default AsigneeSelect;
