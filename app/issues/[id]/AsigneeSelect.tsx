"use client";
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
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { User } from "@prisma/client";
import { Skeleton } from "@/components/ui/skeleton";

const AsigneeSelect = () => {
  // let users;
  // try {
  //   users = await prisma.user.findMany({
  //     orderBy: {
  //       name: "asc",
  //     },
  //   });
  // } catch (error) {
  //   throw new Error();
  // }
  // if (!users) {
  //   return;
  // }

  const {
    data: users,
    isLoading,
    error,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => axios.get("/api/users").then((res) => res.data),
    staleTime: 60 * 1000, // 60 sec
    retry: 3,
  });

  if (isLoading) return <Skeleton className="w-40 h-10 bg-gray-200" />;
  if (error) return null;

  return (
    <Select>
      <SelectTrigger className="w-[150px] bg-secondary flex-1">
        <SelectValue placeholder="Select Assignee" />
      </SelectTrigger>
      <SelectContent className=" bg-secondary">
        <SelectGroup>
          <SelectLabel>Asignee</SelectLabel>
          {users?.map((user) => (
            <SelectItem
              key={user.id}
              value={user.id}
              className="cursor-pointer "
            >
              {user.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default AsigneeSelect;
