"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { Issue, User } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const AsigneeSelect = ({ issue }: { issue: Issue }) => {
  const { toast } = useToast();

  const { data: users, isLoading, error } = useUsers();

  if (isLoading)
    return <Skeleton className="w-40 h-10 bg-gray-200 dark:bg-gray-600" />;
  if (error) return null;

  const assignIssue = (userId: string) => {
    axios
      .patch("/api/issues/" + issue.id, {
        assignedToUserId: userId === "unassigned" ? null : userId,
      })
      .then(() => {
        toast({
          title:
            userId === "unassigned"
              ? "Issue unassigned"
              : "Issue successfully assigned",
        });
      })
      .catch(() => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Cannot assign issue to the user.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      });
  };

  return (
    <Select
      defaultValue={issue.assignedToUserId || ""}
      onValueChange={assignIssue}
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

const useUsers = () =>
  useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => axios.get("/api/users").then((res) => res.data),
    staleTime: 60 * 1000, // 60 sec
    retry: 3,
  });

export default AsigneeSelect;
