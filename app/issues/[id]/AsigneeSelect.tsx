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
import { Issue, User } from "@prisma/client";
import { Skeleton } from "@/components/ui/skeleton";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

const AsigneeSelect = ({ issue }: { issue: Issue }) => {
  const { toast } = useToast();

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

  if (isLoading)
    return <Skeleton className="w-40 h-10 bg-gray-200 dark:bg-gray-600" />;
  if (error) return null;

  return (
    <Select
      defaultValue={issue.assignedToUserId || ""}
      onValueChange={(userId) => {
        axios
          .patch("/apsi/issues/" + issue.id, {
            assignedToUserId: userId === "unassigned" ? null : userId,
          })
          .catch(() => {
            toast({
              variant: "destructive",
              title: "Uh oh! Something went wrong.",
              description: "Cannot assign issue to the user.",
              action: <ToastAction altText="Try again">Try again</ToastAction>,
            });
          });
      }}
    >
      <SelectTrigger className="w-[150px] bg-secondary flex-1">
        <SelectValue placeholder="Select Assignee" />
      </SelectTrigger>
      <SelectContent className=" bg-secondary">
        <SelectGroup>
          <SelectItem value="unassigned">Unassigned</SelectItem>
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
